import Link from "next/link";
import React from "react";
import {Banner_Product, Banner_Type} from "../../generated/graphql";

interface BannerProps {
	shopCollection: Banner_Type[];
	highlyUsed: Banner_Type[];
}

const Banner: React.FC<BannerProps> = (props) => {
	const {shopCollection, highlyUsed} = props;

	const shopCollection1 = shopCollection[0].banners[0];
	//const shopCollection2 = shopCollection[0].banners[1];
	//const shopCollection3 = shopCollection[0].banners[2];

	const highlyUsed1 = highlyUsed[0].banners[0];
	const highlyUsed2 = highlyUsed[0].banners[1];

	return (
		<div className="slider-area mb-90">
			<div className="container wide">
				<div className="row">
					<div className="col-lg-6 mb-md-40 mb-sm-40">
						{/*=======  slider wrapper  =======*/}
						<div className="slider-wrapper">
							<div
								id="rev_slider_13_1_wrapper"
								className="rev_slider_wrapper fullwidthbanner-container"
								data-alias="homepage-13"
								data-source="gallery"
								style={{
									margin: "0px auto",
									background: "transparent",
									padding: "0px",
									marginTop: "0px",
									marginBottom: "0px",
								}}>
								{/* START REVOLUTION SLIDER 5.4.7 auto mode */}
								<div
									id="rev_slider_13_1"
									className="rev_slider fullwidthabanner"
									//style={{display: "none", background: 'black', overflow: 'hidden'}}
									data-version="5.4.7">
									<ul>
										<li
											data-index="rs-33"
											data-transition="parallaxtoright,parallaxtoleft,parallaxtotop,parallaxtobottom,parallaxhorizontal,parallaxvertical,fadefromright,fadefromleft,fadefromtop,fadefrombottom"
											data-slotamount="default,default,default,default,default,default,default,default,default,default"
											data-hideafterloop={0}
											data-hideslideonmobile="off"
											data-easein="default,default,default,default,default,default,default,default,default,default"
											data-easeout="default,default,default,default,default,default,default,default,default,default"
											data-masterspeed="700,default,default,default,default,default,default,default,default,default"
											data-thumb="/images/revimages/perfumes/100x50_slider-homepage13-img2.png"
											data-rotate="0,0,0,0,0,0,0,0,0,0"
											data-saveperformance="off"
											data-title="Slide"
											data-param1
											data-param2
											data-param3
											data-param4
											data-param5
											data-param6
											data-param7
											data-param8
											data-param9
											data-param10
											data-description>
											<img
												style={{opacity: '0.7'}}
												src={shopCollection1?.image ?? undefined}
												alt={shopCollection1?.title ?? undefined}
												// data-lazyload={"/images/revimages/transparent.png"}
												data-bgposition="center center"
												data-kenburns="on"
												data-duration={10000}
												data-ease="Linear.easeNone"
												data-scalestart={100}
												data-scaleend={110}
												data-rotatestart={0}
												data-rotateend={0}
												data-blurstart={0}
												data-blurend={0}
												data-offsetstart="0 0"
												data-offsetend="0 0"
												className="rev-slidebg"
												data-no-retina
											/>
											{/* LAYERS */}
											{/* LAYER NR. 1 */}
											<div
												className="tp-caption   tp-resizeme"
												id="slide-33-layer-13"
												data-x="['left','center','left','left']"
												data-hoffset="['71','-342','65','38']"
												data-y="['middle','top','top','top']"
												data-voffset="['183','194','612','460']"
												data-fontsize="['24','24','24','20']"
												data-color="['rgb(51,51,51)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)']"
												data-width="none"
												data-height="none"
												data-whitespace="nowrap"
												data-type="text"
												data-responsive_offset="on"
												data-frames='[{"delay":1020,"speed":1790,"frame":"0","from":"x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;","mask":"x:[100%];y:0;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
												data-textalign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]"
												data-paddingright="[0,0,0,0]"
												data-paddingbottom="[0,0,0,0]"
												data-paddingleft="[0,0,0,0]"
												style={{
													zIndex: 5,
													whiteSpace: "nowrap",
													fontSize: "24px",
													lineHeight: "36px",
													fontWeight: 600,
													color: "#ffffff",
													letterSpacing: "5px",
													fontFamily: "Work Sans",
												}}>
												{shopCollection1.heading}
											</div>
											{/* LAYER NR. 2 */}
											<div
												className="tp-caption   tp-resizeme"
												id="slide-33-layer-3"
												data-x="['left','center','center','left']"
												data-hoffset="['69','-224','-111','36']"
												data-y="['top','middle','middle','top']"
												data-voffset="['630','-103','215','508']"
												data-fontsize="['56','56','56','40']"
												data-lineheight="['70','60','60','60']"
												data-width="none"
												data-height="none"
												data-whitespace="nowrap"
												data-type="text"
												data-responsive_offset="on"
												data-frames='[{"delay":720,"split":"chars","splitdelay":0.05,"speed":2140,"split_direction":"forward","frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
												data-textalign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]"
												data-paddingright="[0,0,0,0]"
												data-paddingbottom="[0,0,0,0]"
												data-paddingleft="[0,0,0,0]"
												style={{
													zIndex: 6,
													whiteSpace: "nowrap",
													fontSize: "56px",
													lineHeight: "70px",
													fontWeight: 300,
													color: "#ffffff",
													letterSpacing: "0px",
													fontFamily: "Work Sans",
												}}>
												{shopCollection1.title}
											</div>
											{/* LAYER NR. 3 */}
											<div
												className="tp-caption button-under-line rev-btn  tp-resizeme"
												id="slide-33-layer-20"
												data-x="['left','center','center','left']"
												data-hoffset="['75','-369','-246','39']"
												data-y="['top','top','top','top']"
												data-voffset="['726','362','781','607']"
												data-width="none"
												data-height="none"
												data-whitespace="nowrap"
												data-type="button"
												data-actions
												data-responsive_offset="on"
												data-frames='[{"delay":1280,"speed":1790,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(211,18,42);bc:rgb(211,18,42);"}]'
												data-textalign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]"
												data-paddingright="[0,0,0,0]"
												data-paddingbottom="[3,3,3,3]"
												data-paddingleft="[0,0,0,0]"
												style={{
													zIndex: 7,
													whiteSpace: "nowrap",
													letterSpacing: "1px",
													borderColor: "rgb(51,51,51)",
													outline: "none",
													boxShadow: "none",
													boxSizing: "border-box",
													MozBoxSizing: "border-box",
													WebkitBoxSizing: "border-box",
													cursor: "pointer",
												}}>
												<Link href={getBannerLink(shopCollection1.bannerProducts[0])}>
													<a style={{color: '#ffffff'}} className="revslider-button-red">{shopCollection1.title}</a>
												</Link>
											</div>
										</li>
										{/* SLIDE  */}
										{/* <li
											data-index="rs-34"
											data-transition="fadefromright,fadefromleft,fadefromtop,fadefrombottom,fadetoleftfadefromright,fadetorightfadefromleft,fadetotopfadefrombottom,fadetobottomfadefromtop"
											data-slotamount="default,default,default,default,default,default,default,default"
											data-hideafterloop={0}
											data-hideslideonmobile="off"
											data-easein="default,default,default,default,default,default,default,default"
											data-easeout="default,default,default,default,default,default,default,default"
											data-masterspeed="700,default,default,default,default,default,default,default"
											data-thumb="/images/revimages/perfumes/100x50_slider-homepage13-img2.png"
											data-rotate="0,0,0,0,0,0,0,0"
											data-saveperformance="off"
											data-title="Slide"
											data-param1
											data-param2
											data-param3
											data-param4
											data-param5
											data-param6
											data-param7
											data-param8
											data-param9
											data-param10
											data-description>
											<img
												src={shopCollection2.image ?? undefined}
												alt={shopCollection2?.title ?? undefined}
												// data-lazyload={"/images/revimages/transparent.png"}
												data-bgposition="center center"
												data-kenburns="on"
												data-duration={10000}
												data-ease="Linear.easeNone"
												data-scalestart={100}
												data-scaleend={110}
												data-rotatestart={0}
												data-rotateend={0}
												data-blurstart={0}
												data-blurend={0}
												data-offsetstart="0 0"
												data-offsetend="0 0"
												className="rev-slidebg"
												data-no-retina
											/>
											
											<div
												className="tp-caption   tp-resizeme"
												id="slide-34-layer-13"
												data-x="['left','center','left','left']"
												data-hoffset="['71','-339','65','38']"
												data-y="['middle','top','top','top']"
												data-voffset="['183','461','612','460']"
												data-fontsize="['24','24','24','20']"
												data-color="['rgb(51,51,51)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)']"
												data-width="none"
												data-height="none"
												data-whitespace="nowrap"
												data-type="text"
												data-responsive_offset="on"
												data-frames='[{"delay":440,"speed":1790,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
												data-textalign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]"
												data-paddingright="[0,0,0,0]"
												data-paddingbottom="[0,0,0,0]"
												data-paddingleft="[0,0,0,0]"
												style={{
													zIndex: 5,
													whiteSpace: "nowrap",
													fontSize: "24px",
													lineHeight: "36px",
													fontWeight: 600,
													color: "#333333",
													letterSpacing: "5px",
													fontFamily: "Work Sans",
												}}>
												{shopCollection2.title}
											</div>
											
											<div
												className="tp-caption   tp-resizeme"
												id="slide-34-layer-3"
												data-x="['left','center','center','left']"
												data-hoffset="['69','-234','-145','36']"
												data-y="['top','middle','middle','top']"
												data-voffset="['630','153','216','508']"
												data-fontsize="['56','56','56','40']"
												data-lineheight="['70','60','60','60']"
												data-width="none"
												data-height="none"
												data-whitespace="nowrap"
												data-type="text"
												data-responsive_offset="on"
												data-frames='[{"delay":290,"split":"chars","splitdelay":0.1,"speed":1640,"split_direction":"forward","frame":"0","from":"x:[-105%];z:0;rX:0deg;rY:0deg;rZ:-90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
												data-textalign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]"
												data-paddingright="[0,0,0,0]"
												data-paddingbottom="[0,0,0,0]"
												data-paddingleft="[0,0,0,0]"
												style={{
													zIndex: 6,
													whiteSpace: "nowrap",
													fontSize: "56px",
													lineHeight: "70px",
													fontWeight: 300,
													color: "#333333",
													letterSpacing: "0px",
													fontFamily: "Work Sans",
												}}>
												{shopCollection2.title}
											</div>
											
											<div
												className="tp-caption button-under-line rev-btn  tp-resizeme"
												id="slide-34-layer-20"
												data-x="['left','center','center','left']"
												data-hoffset="['75','-345','-246','39']"
												data-y="['top','top','top','top']"
												data-voffset="['726','619','781','607']"
												data-width="none"
												data-height="none"
												data-whitespace="nowrap"
												data-type="button"
												data-actions
												data-responsive_offset="on"
												data-frames='[{"delay":830,"speed":1790,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(211,18,42);bc:rgb(211,18,42);"}]'
												data-textalign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]"
												data-paddingright="[0,0,0,0]"
												data-paddingbottom="[3,3,3,3]"
												data-paddingleft="[0,0,0,0]"
												style={{
													zIndex: 7,
													whiteSpace: "nowrap",
													letterSpacing: "1px",
													borderColor: "rgb(51,51,51)",
													outline: "none",
													boxShadow: "none",
													boxSizing: "border-box",
													MozBoxSizing: "border-box",
													WebkitBoxSizing: "border-box",
													cursor: "pointer",
												}}>
												<Link href={getBannerLink(shopCollection2.bannerProducts[0])}>
													<a className="revslider-button-red">{shopCollection2.title}</a>
												</Link>
											</div>
										</li>
										 */}
										{/* SLIDE  */}
										{/* <li
											data-index="rs-35"
											data-transition="curtain-1,curtain-2,curtain-3,slideremoveup,slideremovedown,slideremoveright,slideremoveleft,slideremovehorizontal,slideremovevertical"
											data-slotamount="default,default,default,default,default,default,default,default,default"
											data-hideafterloop={0}
											data-hideslideonmobile="off"
											data-easein="default,default,default,default,default,default,default,default,default"
											data-easeout="default,default,default,default,default,default,default,default,default"
											data-masterspeed="700,default,default,default,default,default,default,default,default"
											data-thumb="/images/revimages/perfumes/100x50_slider-homepage13-img3.png"
											data-rotate="0,0,0,0,0,0,0,0,0"
											data-saveperformance="off"
											data-title="Slide"
											data-param1
											data-param2
											data-param3
											data-param4
											data-param5
											data-param6
											data-param7
											data-param8
											data-param9
											data-param10
											data-description>
											<img
												src={shopCollection3.image ?? undefined}
												alt={shopCollection3?.title ?? undefined}
												// data-lazyload={"/images/revimages/transparent.png"}
												data-bgposition="center center"
												data-kenburns="on"
												data-duration={10000}
												data-ease="Linear.easeNone"
												data-scalestart={100}
												data-scaleend={110}
												data-rotatestart={0}
												data-rotateend={0}
												data-blurstart={0}
												data-blurend={0}
												data-offsetstart="0 0"
												data-offsetend="0 0"
												className="rev-slidebg"
												data-no-retina
											/>
										
											<div
												className="tp-caption   tp-resizeme"
												id="slide-35-layer-13"
												data-x="['left','center','left','left']"
												data-hoffset="['71','-339','65','38']"
												data-y="['middle','top','top','top']"
												data-voffset="['183','461','612','460']"
												data-fontsize="['24','24','24','20']"
												data-color="['rgb(51,51,51)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)']"
												data-width="none"
												data-height="none"
												data-whitespace="nowrap"
												data-type="text"
												data-responsive_offset="on"
												data-frames='[{"delay":500,"speed":1790,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
												data-textalign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]"
												data-paddingright="[0,0,0,0]"
												data-paddingbottom="[0,0,0,0]"
												data-paddingleft="[0,0,0,0]"
												style={{
													zIndex: 5,
													whiteSpace: "nowrap",
													fontSize: "24px",
													lineHeight: "36px",
													fontWeight: 600,
													color: "#333333",
													letterSpacing: "5px",
													fontFamily: "Work Sans",
												}}>
												{shopCollection3.heading}
											</div>
											<div
												className="tp-caption   tp-resizeme"
												id="slide-35-layer-3"
												data-x="['left','center','center','left']"
												data-hoffset="['69','-234','-145','36']"
												data-y="['top','middle','middle','top']"
												data-voffset="['630','153','216','508']"
												data-fontsize="['56','56','56','40']"
												data-lineheight="['70','60','60','60']"
												data-width="none"
												data-height="none"
												data-whitespace="nowrap"
												data-type="text"
												data-responsive_offset="on"
												data-frames='[{"delay":500,"split":"chars","splitdelay":0.05,"speed":2000,"split_direction":"forward","frame":"0","from":"y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
												data-textalign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]"
												data-paddingright="[0,0,0,0]"
												data-paddingbottom="[0,0,0,0]"
												data-paddingleft="[0,0,0,0]"
												style={{
													zIndex: 6,
													whiteSpace: "nowrap",
													fontSize: "56px",
													lineHeight: "70px",
													fontWeight: 300,
													color: "#333333",
													letterSpacing: "0px",
													fontFamily: "Work Sans",
												}}>
												{shopCollection3.title ?? ""}
											</div>
											<div
												className="tp-caption button-under-line rev-btn  tp-resizeme"
												id="slide-35-layer-20"
												data-x="['left','center','center','left']"
												data-hoffset="['75','-345','-246','39']"
												data-y="['top','top','top','top']"
												data-voffset="['726','619','781','607']"
												data-width="none"
												data-height="none"
												data-whitespace="nowrap"
												data-type="button"
												data-actions
												data-responsive_offset="on"
												data-frames='[{"delay":920,"speed":1790,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(211,18,42);bc:rgb(211,18,42);"}]'
												data-textalign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]"
												data-paddingright="[0,0,0,0]"
												data-paddingbottom="[3,3,3,3]"
												data-paddingleft="[0,0,0,0]"
												style={{
													zIndex: 7,
													whiteSpace: "nowrap",
													letterSpacing: "1px",
													borderColor: "rgb(51,51,51)",
													outline: "none",
													boxShadow: "none",
													boxSizing: "border-box",
													MozBoxSizing: "border-box",
													WebkitBoxSizing: "border-box",
													cursor: "pointer",
												}}>
												<Link href={getBannerLink(shopCollection3.bannerProducts[0])}>
													<a className="revslider-button-red">{shopCollection3.title}</a>
												</Link>
											</div>
										</li>
									 */}
									</ul>
									<div className="tp-bannertimer tp-bottom" style={{visibility: "hidden"}} />{" "}
								</div>
							</div>
							{/* END REVOLUTION SLIDER */}
						</div>
						{/*=======  End of slider wrapper  =======*/}
					</div>
					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-12 mb-40">
								{/*=======  hover zoom banner  =======*/}
								<div style={{background: 'black', overflow: 'hidden'}} className="single-banner single-banner--hoverzoom">
									<Link href={getBannerLink(highlyUsed1.bannerProducts[0])}>
										<a>
											<img
											style={{opacity: '0.7'}}
												src={highlyUsed1.image as string}
												className="img-fluid"
												alt={highlyUsed1.title as string}
											/>
											<span className="banner-content banner-content--product-type banner-content--product-type--bigtitle">
												<SplitWordToSentence word={highlyUsed1.title as string} />
												<span style={{color: '#ffffff'}} className="price">&#8377; {highlyUsed1.cost}</span>
											</span>
										</a>
									</Link>
								</div>
								{/*=======  End of hover zoom banner  =======*/}
							</div>
							<div className="col-lg-12">
								{/*=======  hover zoom banner  =======*/}
								<div style={{background: 'black', overflow: 'hidden'}} className="single-banner single-banner--hoverzoom">
									<Link href={getBannerLink(highlyUsed2.bannerProducts[0])}>
										<a>
											{" "}
											<img
											style={{opacity: '0.7'}}
												src={highlyUsed2.image as string}
												className="img-fluid"
												alt={highlyUsed2.title as string}
											/>
											<span className="banner-content banner-content--product-type banner-content--product-type--bigtitle">
												<SplitWordToSentence word={highlyUsed2.title as string} />
												<span style={{color: '#ffffff'}} className="price">&#8377; {highlyUsed2.cost}</span>
											</span>
										</a>
									</Link>
								</div>
								{/*=======  End of hover zoom banner  =======*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;

const SplitWordToSentence: React.FC<{word: string}> = (props) => {
	const {word} = props;

	return (
		<span style={{color: '#ffffff'}} className="name">
			{word.split(" ")[0]} {word.split(" ")[1]}
			<br />
			{word.split(" ").slice(2).join(" ")}
		</span>
	);
};

export const getBannerLink = (bannerProduct: Banner_Product): string => {
	let link = "";

	if (bannerProduct.productTypeId) {
		link = `/product/${bannerProduct.product_type?.productId}`;
	} else if (bannerProduct.productId) {
		link = `/product/${bannerProduct.productId}`;
	} else if (bannerProduct.subCategoryId) {
		link = `/category/${bannerProduct.subCategoryId}`;
	}

	return link;
};
