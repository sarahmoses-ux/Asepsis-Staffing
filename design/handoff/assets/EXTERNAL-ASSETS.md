# External assets

The design pulls type and photography from two CDNs. Nothing else is fetched at
runtime. An internet connection is required for the files to render as designed.

## Typefaces (Google Fonts)

- https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,400..700,0..100,0..1&family=Instrument+Sans:wght@400;500;600;700&display=swap
- https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap

Families in use:
- **Fraunces** — display / headlines. Variable axes: opsz 9–144, wght 400–700, SOFT 0, WONK 0.
- **Instrument Sans** — UI and body copy (weights 400/500/600/700).
- **Inter** — used only by the archived v1 platform file and the reference HTML page.

If self-hosting is preferred, both families are SIL Open Font License and can be
downloaded from fonts.google.com and swapped into the `<helmet>` block of each file.

## Photography (Unsplash)

22 image URLs, all served from images.unsplash.com with `auto=format&fit=crop`
crop parameters baked into the query string. Every photo carries an oxblood-tinted
bottom scrim in CSS so the set reads as one library.

- https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80
- https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80
- https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80
- https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80
- https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=100&q=80
- https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80
- https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80
- https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=700&q=80
- https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80
- https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80
- https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80
- https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80
- https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80
- https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80
- https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80
- https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80
- https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=80
- https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80
- https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&q=80

Licensing: Unsplash License (free for commercial use, no attribution required).
Replace with licensed brand photography before production launch.
