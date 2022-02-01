import config from "../../../config";
const URL = config.REACT_APP_URL;

export const linearSections = [
  {
    title: "CSS Linear Gradients",
    content: `<strong>What is a Linear Gradient?</strong>
    <br><br>
    Probably the most common and used type of gradient is the linear-gradient().
    <br>
    To create a linear gradient you must define at least two colors (or color-stops), and their value can be any type of color format (e.g. Hex, named colors, rgba, hsla, etc.).
    <br>
    The gradient direction can be specified as a 2 words value (e.g. "to top", "to bottom", "to left" and "to right") or it can be specified as an angle value (e.g. "0deg", "90deg"' "180deg").
    <br>
    If you don't declare any value, the default direction will be set "to bottom", meaning the gradient will go from top (color-stop-1) to bottom (color-stop-2).
    <br>
    <br><br>
    <strong>Syntax</strong>
    <br><br>
    <pre id="demo">background: linear-gradient(direction, color-stop1, color-stop2, ...);</pre>
    <br><br>
    <strong>Example</strong>
    <br><br>
    <pre id="demo">background: linear-gradient(to bottom right, #7A7FBA, #11C37C);</pre>
    <br><br>
    <strong>Result</strong>
    <br><br>
    <div class="demo" id="linear-gradient"> </div>
    <br><br>
    <strong>Browser compatibility</strong>
    <br><br>
    <table class="table">
      <thead>
        <tr class="title">
          <th>IE</th>
          <th>Edge</th>
          <th>Firefox</th>
          <th>Chrome</th>
          <th>Safari</th>
          <th>Opera</th>
          <th>iOS Safari</th>
          <th>Opera
              <br>Mini</th>
          <th>Android
              <br>Browser</th>
          <th>Chrome
              <br>Android</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10+</td>
          <td>12+</td>
          <td>3.6+</td>
          <td>10+</td>
          <td>6.1+</td>
          <td>11.5</td>
          <td>6.1+</td>
          <td>x</td>
          <td>95+</td>
          <td>95+</td>
        </tr>
      </tbody>
    </table>
    <br><br>
    You can read more information about browser compatibility <a href="https://caniuse.com/mdn-css_types_image_gradient_linear-gradient" target="_blank" id="ref">here</a>. For maximum cross-browser compatibility and coverage, it's important that you use CSS prefixes. You can use <a href="https://autoprefixer.github.io/" target="_blank" id="ref">this</a> tool to append CSS prefixes to your CSS code.
    <br>
    <br><br>
    <strong>CSS Linear Gradients Generator</strong>
    <br><br>
    You can easily generate your own linear gradients with the <a href="${URL}/?gt=linear" id="ref">online css gradient generator</a>. 
    <br><br>`
  }
]

export const radialSections = [
  {
    title: "CSS Radial Gradients",
    content: `<strong>What is a Radial Gradient?</strong>
    <br><br>
    Probably the second most common type of gradient, the radial-gradient().
    <br>
    To create a radial gradient you must define at least two colors, and their value can be any type of color format (e.g. Hex, named colors, rgba, hsla, etc.).
    <br>
    The gradient shape can be "circle" or "ellipse", and if not specified it defaults to "ellipse", while the position, which can be interpreted in the same way as "background-position", if not specified will default to "center" and meaning the gradient will go from inside (start-color) to outside (end-color).
    <br>
    <br><br>
    <strong>Syntax</strong>
    <br><br>
    <pre id="demo">background: radial-gradient(shape-position, start-color, ..., end-color);</pre>
    <br><br>
    <strong>Example</strong>
    <br><br>
    <pre id="demo">background: radial-gradient(ellipse at center, #8986DF, #7A136A);</pre>
    <br><br>
    <strong>Result</strong>
    <br><br>
    <div class="demo" id="radial-gradient"> </div>
    <br><br>
    <strong>Browser compatibility</strong>
    <br><br>
    <table class="table">
      <thead>
        <tr class="title">
          <th>IE</th>
          <th>Edge</th>
          <th>Firefox</th>
          <th>Chrome</th>
          <th>Safari</th>
          <th>Opera</th>
          <th>iOS Safari</th>
          <th>Opera
              <br>Mini</th>
          <th>Android
              <br>Browser</th>
          <th>Chrome
              <br>Android</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10+</td>
          <td>12+</td>
          <td>3.6+</td>
          <td>10+</td>
          <td>6.1+</td>
          <td>11.5</td>
          <td>6.1+</td>
          <td>x</td>
          <td>95+</td>
          <td>95+</td>
        </tr>
      </tbody>
    </table>
    <br><br>
    You can read more information about browser compatibility <a href="https://caniuse.com/mdn-css_types_image_gradient_radial-gradient" target="_blank" id="ref">here</a>. For maximum cross-browser compatibility and coverage, it's important that you use CSS prefixes. You can use <a href="https://autoprefixer.github.io/" target="_blank" id="ref">this</a> tool to append CSS prefixes to your CSS code.
    <br>
    <br><br>
    <strong>CSS Radial Gradients Generator</strong>
    <br><br>
    You can easily generate your own radial gradients with the <a href="${URL}/?gt=radial" id="ref">online css gradient generator</a>. 
    <br><br>`
  }
]

export const textSections = [
  {
    title: "CSS Text Gradients",
    content: `      <strong>What is a Text Gradient?</strong>
        <br><br>
        Probably less known than the linear gradient and the radial gradient, is the text gradient.
        <br>
        It's the same background idea as the linear gradient, only that in this case you apply the gradient to a text instead of filling a background.
        <br>
        You'll love it. Just try to hover over the website logo on the left and you'll see for yourself.
        <br>
        <br><br>
        <strong>Syntax</strong>
        <br><br>
        <pre id="demo">background: &lt;linear-gradient&gt;
              background-clip: text
              text-fill-color: transparent</pre>
        <br><br>
        <strong>Example</strong>
        <br><br>
        <pre id="demo">background: linear-gradient(to bottom right, #A22FCE, #FF7000);
              background-clip: text;
              text-fill-color: transparent;</pre>
        <br><br>
        <strong>Result</strong>
        <br><br>
        <div class="demo-text" id="text-gradient">Text Gradient</div>
        <br><br>
        <strong>Browser compatibility</strong>
        <br><br>
        You can read more information about browser compatibility <a href="https://caniuse.com/" target="_blank" id="ref">here</a>. For maximum cross-browser compatibility and coverage, it's important that you use CSS prefixes. You can use <a href="https://autoprefixer.github.io/" target="_blank" id="ref">this</a> tool to append CSS prefixes to your CSS code.
        <br>
        <br><br>
        <strong>CSS Text Gradients Generator</strong>
        <br><br>
        You can easily generate CSS gradients to be used in your own Text gradients with the <a href="${URL}" id="ref">online css gradient generator</a>. 
        <br><br>`
  }
]