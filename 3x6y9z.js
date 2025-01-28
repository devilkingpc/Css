const AwsIndStreamDomain 			= 'https://iloplint331bhi.com';

(function() {

	const AwsIndStreamIframeParamTr 	= IndStreamPlayerConfigs.tr !== false && IndStreamPlayerConfigs.tr > 0 ? '?tr=' + parseInt(IndStreamPlayerConfigs.tr) : '';
  	const AwsIndStreamPlayerIframe 		= document.createElement('iframe')
  	const AwsIndStreamIframeUrl 		= `${AwsIndStreamDomain}/play/${IndStreamPlayerConfigs.src}${AwsIndStreamIframeParamTr}`
  	var   initIndStreamPlayer 			= false;
  
	const genAwsPlayer = () => {
		AwsIndStreamPlayerIframe.setAttribute('src', AwsIndStreamIframeUrl)
		AwsIndStreamPlayerIframe.setAttribute('width', 1)
		AwsIndStreamPlayerIframe.setAttribute('height', 1)
		AwsIndStreamPlayerIframe.setAttribute('frameborder', 0)
		AwsIndStreamPlayerIframe.setAttribute('allowfullscreen', 'allowfullscreen')

	  	const AwsIndStreamPlayerContainer = typeof IndStreamPlayerConfigs.selector == 'string' 
