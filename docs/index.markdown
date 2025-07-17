---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<script type="x-shader/x-vertex" id="vertexshader">
	{% include vertex.vert %}
</script>

<script type="x-shader/x-fragment" id="fragmentshader">
	{% include fragment.frag %}
</script>

<script>
	{% include main.js %}
</script>
<div id="canvas">
</div>
