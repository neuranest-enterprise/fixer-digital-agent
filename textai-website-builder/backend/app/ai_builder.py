from typing import Dict, Any
from app import config


def _fallback_html(prompt: str) -> str:
    return f"""
<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\" />
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
  <title>AI Generated - Preview</title>
  <style>
    body {{ font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"; margin: 0; background: #0b1220; color: #e8eefc; }}
    header {{ background: linear-gradient(135deg, #0ea5e9, #7c3aed); padding: 48px 24px; text-align: center; }}
    header h1 {{ margin: 0; font-size: 36px; }}
    header p {{ margin-top: 8px; opacity: 0.9; }}
    main {{ padding: 24px; max-width: 1000px; margin: 0 auto; }}
    .grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }}
    .card {{ background: #111827; border: 1px solid #1f2937; border-radius: 12px; padding: 16px; }}
    .btn {{ background: #0ea5e9; border: none; color: white; padding: 10px 16px; border-radius: 8px; cursor: pointer; }}
    footer {{ text-align: center; padding: 24px; color: #93a3b8; }}
  </style>
</head>
<body>
  <header>
    <h1>AI Website Builder</h1>
    <p>Quick preview for: <em>{prompt}</em></p>
  </header>
  <main>
    <section class=\"grid\">
      <div class=\"card\"><h3>Hero</h3><p>Futuristic hero section with CTA</p><button class=\"btn\">Get Started</button></div>
      <div class=\"card\"><h3>Dashboard</h3><p>KPIs and charts preview</p></div>
      <div class=\"card\"><h3>Gallery</h3><p>Image tiles and assets</p></div>
    </section>
  </main>
  <footer>Generated locally without external AI calls</footer>
</body>
</html>
"""


def generate_page(prompt: str, api: str = "openai") -> Dict[str, Any]:
    """
    Generate HTML for a page. If API keys are available, attempts to use the
    requested provider; otherwise returns a styled, local fallback template.
    """
    html = _fallback_html(prompt)
    assets: Dict[str, Any] = {"images": [], "links": []}

    provider = (api or "openai").lower().strip()

    try:
        if provider == "openai" and config.OPENAI_API_KEY:
            # Lazy import to avoid import errors if not installed
            from openai import OpenAI  # type: ignore
            client = OpenAI(api_key=config.OPENAI_API_KEY)
            cot_prompt = (
                f"Reason step-by-step: {prompt}. "
                "Generate only valid HTML for a multi-page style site with hero, dashboard, gallery."
            )
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": cot_prompt}],
                temperature=0.7,
            )
            content = response.choices[0].message.content or ""
            if "<" in content:
                html = content
        elif provider == "gemini" and config.GEMINI_API_KEY:
            import google.generativeai as genai  # type: ignore
            genai.configure(api_key=config.GEMINI_API_KEY)
            model = genai.GenerativeModel("gemini-pro")
            response = model.generate_content(
                f"Generate only HTML. Prompt: {prompt}. Include hero, dashboard, gallery sections."
            )
            if hasattr(response, "text") and response.text:
                html = response.text
        elif provider == "anthropic" and config.ANTHROPIC_API_KEY:
            from anthropic import Anthropic  # type: ignore
            client = Anthropic(api_key=config.ANTHROPIC_API_KEY)
            response = client.messages.create(
                model="claude-3-opus-20240229",
                max_tokens=1500,
                messages=[{"role": "user", "content": f"HTML only: {prompt}"}],
            )
            content = getattr(response, "content", None)
            if content and isinstance(content, list) and getattr(content[0], "text", None):
                html = content[0].text
    except Exception:
        # If anything fails, fall back gracefully
        html = _fallback_html(prompt)

    # No external web search by default to keep this self-contained
    return {"html": html, "assets": assets}