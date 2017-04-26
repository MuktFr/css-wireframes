# ![CSS Wireframes Logo](images/css-wireframes-logo-32.png) css-wireframes

A CSS framework to quickly design responsive wireframes directly in HTML.

![CSS Wireframes Screenshot](images/css-wireframes-screenshot.jpg)

## Installation

Download a release, then put the CSS and Javascript in your project folders.

## Getting started

1. First, include in the `<head>` your favorite grid system, then the wireframe CSS and Javascript.
``` html
<!-- Grid system (which is up to you) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/bootstrap/4.0.0-alpha.6/css/bootstrap-grid.min.css" type="text/css" />
<!-- Wireframes CSS -->
<link rel="stylesheet" href="css/wireframes.css" type="text/css" />
<!-- Wireframes Javascript -->
<script type="text/javascript" src="javascript/wireframes.js"></script>
		…
```

2. Then compose your ergonomy puting blocks where you want, and apply wireframe classes when needed.
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
				<p><span class="wf-text-lines">Vestibulum cras condimentum dis ullamcorper mattis dictumst interdum a commodo a parturient sit cras laoreet adipiscing magna sapien.</span></p>
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

Checkout [our documentation](http://wireframes.ldd.fr/examples/) in the examples page.
