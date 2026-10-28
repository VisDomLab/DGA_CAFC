# DGA-CAFC — WACV 2027

Official project-page website scaffold for **Attention Drift Regularization with Adaptive Initialization for Domain-Robust Visual Recognition** (WACV 2027, Algorithms Track).

**Authors:** Shivangi Rai and Vinod K Kurmi  
**Affiliation:** Department of Data Science and Engineering, Indian Institute of Science Education and Research Bhopal, India.

## Preview locally

Open `index.html` directly in any modern browser. The page is static and requires no build step. All charts work offline without third-party dependencies.

Optionally, use `python -m http.server 8000` in this directory and visit `http://localhost:8000`.

## Deploy on GitHub Pages

1. Create a public repository named `DGA-CAFC` under the account `shivangiraii`.
2. Upload the **contents** of this directory (including `index.html`) to the root of the `main` branch.
3. In **Settings → Pages**, choose **Deploy from a branch**, `main`, and `/(root)`.
4. The expected published URL is `https://shivangiraii.github.io/DGA-CAFC/` after deployment.

## Website contents

- `index.html`: semantic website sections and paper information.
- `styles.css`: premium navy/cyan/violet responsive theme.
- `script.js`: accessible mobile menu, subtle scroll effects and interactive, dependency-free charts.
- `assets/dgacafc-framework.png`: full DGA-CAFC framework figure.
- `assets/cafc-motivation.png`: CAFC figure.

The **Paper** and **Code** buttons deliberately say **Coming Soon**; there is no BibTeX section or acknowledgements section. The page contains no paper PDF or implementation code. All results are drawn from the supplied manuscript; SFDA accuracy values are from its Tables 1–3 and DG ResNet-50 averages from Tables 4–5.

## Updating content

When the public paper and implementation are available, edit the `.inactive-btn` elements in `index.html` to active links. To update results, modify the `datasets` constant in `script.js`.

## Contact

- Shivangi Rai — shivangir23@iiserb.ac.in
- Vinod K Kurmi — vinodkk@iiserb.ac.in
