# DGA-CAFC | WACV 2027

Project website for **Attention Drift Regularization with Adaptive Initialization for Domain-Robust Visual Recognition** (WACV 2027, Algorithms Track).

This static site is based on the layout and design conventions of the supplied 3D-BBDA project page. It includes sections for the abstract, CAFC and DGASS methods, quantitative results, links, and citation.

## View locally

Open `index.html` in a browser, or serve the folder with `python -m http.server 8000` and visit `http://localhost:8000`.

## Deploy with GitHub Pages

Create a GitHub repository, push this directory's files to the root of its default branch, then enable GitHub Pages via **Settings → Pages → Deploy from a branch** and select that branch's `/ (root)`.

## Images requested

Please supply high-resolution, publication-approved versions of:

- `assets/dgacafc-framework.png` — full method framework (paper Fig. 2; high priority)
- `assets/cafc-motivation.png` — CAFC diagram (paper Fig. 1) or motivation/attention-drift visualization (high priority)
- `assets/sfda-comparison.png` — plot/chart comparing SFDA results (optional, can construct from the paper)
- `assets/dg-comparison.png` — PACS/VLCS gains with CAFC (optional, can construct from the paper)

When images arrive, replace each corresponding `<div class="figure-placeholder ...">` with `<img src="assets/FILENAME.png" alt="..." />` in `index.html`. Do not reuse 3D-BBDA figures: they illustrate a different paper.

## Information still needed

- Final author names, order, affiliations, author homepage links, and equal-contribution notes, if any.
- Corresponding-author email and optional lab homepage link.
- Public paper URL/PDF approval. The uploaded manuscript is an anonymous submission draft and is **not included** in this repository.
- Public code repository URL and whether implementation or checkpoints will be released.
- Final approved BibTeX citation.

## Notes

The numbers on the page are from the supplied manuscript: 91.65% Office31, 79.75% Office-Home, 87.49% DomainNet40; Office31 full method exceeds the 90.64% ablation baseline by 1.01 percentage points. The repo is a **project webpage**, not a runnable training/inference implementation.

No author identities are inferred from other projects. Replace all placeholders before public release.


## Included paper figures

- `assets/dgacafc-framework.png` — Figure 2, full framework overview (white-backed version of the uploaded transparent PNG).
- `assets/cafc-motivation.png` — Figure 1, CAFC illustration (white-backed version of the uploaded transparent PNG).

Both images are integrated into `index.html`. Attribution/citation should follow the final camera-ready publication.
