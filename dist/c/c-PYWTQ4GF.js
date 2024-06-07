import{a as d,b as i}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-K77K2XK5.js";import{a as e}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-2LNZKOQK.js";var o,a=e(()=>{"use strict";i();o={"template-viewer-widget-background":d`
	<div class="rmwidget widget-background" style="background-color: #<%=data.color%>">

        <% if (data.selectedType == 'picture') { %>
            <div class="picture-background" style="opacity: <%=data.opacity || 1%>;"></div>
        <% } %>

        <% if (data.selectedType == 'video') { %>
            <div class="video-background">
                <div class="video-container"></div>
                <div class="overlay"></div>
            </div>
		<% } %>

		<% if (data.selectedType == 'slideshow') { %>
			<div class="slideshow-background">
				<div class="slideshow-container"></div>
				<div class="slideshow-preload"></div>
			</div>
		<% } %>
	</div>
`}});export{o as a,a as b};
