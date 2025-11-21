# Deployment Log - 2025-11-21

## Changes
- Removed duplicated "About Us" content from `about-us.html`.
- Specifically, removed the header image block which contained a visual duplication of the text content found in the main section.
- **Update**: Restored the header image section using a newly generated clean landscape image (`assets/images/about-header-clean.png`) without the text overlay, as per user request.
- **Update**: Replaced the "Raw Material Area" image in `factory-gallery.html` with a new uploaded image (`assets/images/gallery/raw-material-area-new.jpg`).
- **Feature**: Added a lightbox/modal to `factory-gallery.html`.
- **Update**: Configured the "Raw Material Area" image to open the high-resolution zoomed version (`assets/images/gallery/raw-material-area-zoomed.jpg`) in the modal when clicked.
- **Fix**: Corrected the zoomed image file to show the actual new photo instead of the old screenshot with decorative frame.

## Verification
- [x] Checked `about-us.html` to ensure the header image div is removed.
- [x] Verified that the main "About Us" text content remains intact under the "About Us" heading.
- [x] Verified `about-us.html` now includes the new clean image `assets/images/about-header-clean.png`.
- [x] Confirmed image file exists in `assets/images/`.
- [x] Verified `factory-gallery.html` references `assets/images/gallery/raw-material-area-new.jpg`.
- [x] Confirmed new gallery image exists.
- [x] Verified lightbox code in `factory-gallery.html`.
- [x] Confirmed zoomed image exists at `assets/images/gallery/raw-material-area-zoomed.jpg` (159KB).
- [x] Verified onclick handler points to correct zoomed JPG file.
- [x] Confirmed old PNG screenshot file has been removed.

## Status
- [x] Changes applied
- [x] Committed and Pushed to main branch
- [x] Deployment triggered (via Git Push)
- [x] Final Verification Complete
