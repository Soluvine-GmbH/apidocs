window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
	urls: [
		{url: "https://apidocs.soluvine.com/swagger.fxl.2_7_2.json", name: "FXL 2.7.2.0 and above"},	
		{url: "https://apidocs.soluvine.com/swagger.fxl.2_7_0.json", name: "FXL 2.7.0.0 and 2.7.1.0"},	
		{url: "https://apidocs.soluvine.com/swagger.fxl.2_6_9.json", name: "FXL 2.6.9.0"},	
	  {url: "https://apidocs.soluvine.com/swagger.fxl.2_6_7.json", name: "FXL 2.6.7.0 and 2.6.8.0"},
	  {url: "https://apidocs.soluvine.com/swagger.fxl.2_6_6_0.json", name: "FXL 2.6.6.0"},
	  {url: "https://apidocs.soluvine.com/swagger.fxl.2_6_5_0.json", name: "FXL 2.6.5.0"},
	  {url: "https://apidocs.soluvine.com/swagger.fxs.3_2_6_0.json", name: "FXS 3.2.6.0 and above"},
	  {url: "https://apidocs.soluvine.com/swagger.fxl.2_6_4_0.fxs.3_2_5_0.json", name: "FXL 2.6.4.0 and older + FXS 3.2.5.0 and older"},
	],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
