# css-wireframes
CSS framework to quickly design responsive wireframes directly in HTML.

## Installation

Download a release, then put the CSS, JS and images in your project folders.

## Getting started

First, choose your favorite grid system, and include the wireframe CSS and Javascript.
``` html
<head>
	<!-- The grid is up to you -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/bootstrap/4.0.0-alpha.6/css/bootstrap-grid.min.css" type="text/css" />
	<!-- Wireframes CSS -->
	<link rel="stylesheet" href="css/wireframes.css" type="text/css" />
	<!-- Wireframes Javascript -->
	<script type="text/javascript" src="javascript/wireframes.js"></script>
		…
```

Then compose your ergonomy puting blocks where you want, and apply wireframe classes when needed.
``` html
<body>
	<div class="container">
		<div class="wf-block">Header</div>
		
		<div class="row">
			<div class="col">
				<h1>
					<span class="wf-text-lines wf-text--important">
						Lorem ipsum dolor sit amet
					</span>
				</h1>
				<p><span class="wf-text-lines">Vestibulum cras condimentum dis ullamcorper mattis dictumst interdum a commodo a parturient sit cras laoreet adipiscing magna sapien. A interdum curabitur vestibulum vestibulum dui cursus aptent dictum litora ipsum viverra scelerisque vestibulum venenatis dictumst a. Sociosqu at et erat nulla parturient orci porttitor lorem lobortis consectetur nibh vulputate hac fames dis at a ullamcorper elementum donec eget platea aliquam phasellus. Suspendisse feugiat maecenas est vestibulum dictum suspendisse ante condimentum eleifend ut lectus in natoque interdum ultricies a dictum a mollis eros justo. Ultrices ut orci enim proin a a semper eros velit a purus proin sodales vestibulum aliquam ullamcorper lacus himenaeos massa commodo aenean adipiscing commodo hac torquent rutrum.</span></p>
			</div>
			<div class="col-md-4 wf-optional">
				<div class="wf-block wf-block--fill">
					Navigation
				</div>
			</div>
		</div>
	</div>
</body>
```

## Documentation

Checkout [our examples](http://wireframes.ldd.fr/examples/) for a complete documentation.
