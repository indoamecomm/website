import Link from "next/link";
import React from "react";
import {Banner_Type} from "../../generated/graphql";
import {getBannerLink} from "./Banner";

interface FeaturedProductProps {
	featuredProduct: Banner_Type[];
}

const FeaturedProduct: React.FC<FeaturedProductProps> = (props: FeaturedProductProps) => {
	const {
		featuredProduct: [featuredProducts],
	} = props;

	const featuredProduct = featuredProducts.banners[0];

	const description = splitSentence(featuredProduct.description ?? "", 8);

	return (
		<div className="cabinet-revslider-area mt-50 mt-md-30 mt-sm-30 mb-100 mb-md-80 mb-sm-80">
			<div className="container wide">
				<div className="row">
					<div className="col-lg-12">
						<div
							id="rev_slider_6_1_wrapper"
							className="rev_slider_wrapper fullwidthbanner-container"
							data-alias="banner-cabinet"
							data-source="gallery"
							style={{margin: "0px auto", background: "transparent", padding: "0px", marginTop: "0px", marginBottom: "0px"}}>
							{/* START REVOLUTION SLIDER 5.4.7 fullwidth mode */}
							<div id="rev_slider_6_1" className="rev_slider fullwidthabanner" style={{display: "none"}} data-version="5.4.7">
								<ul>
									{/* SLIDE  */}
									<li
										data-index="rs-14"
										data-transition="fade"
										data-slotamount="default"
										data-hideafterloop={0}
										data-hideslideonmobile="off"
										data-easein="default"
										data-easeout="default"
										data-masterspeed={470}
										data-rotate={0}
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
										{/* MAIN IMAGE */}
										<img
											src="/images/revimages/transparent.png"
											data-bgcolor="#ffffff"
											style={{background: "#ffffff"}}
											alt=""
											data-bgposition="center center"
											data-bgfit="cover"
											data-bgrepeat="no-repeat"
											data-bgparallax="off"
											className="rev-slidebg"
											data-no-retina
										/>
										{/* LAYERS */}
										{/* LAYER NR. 1 */}
										<div
											className="tp-caption tp-shape tp-shapewrapper  tp-resizeme"
											id="slide-14-layer-1"
											data-x="['right','right','right','right']"
											data-hoffset="['681','0','0','11']"
											data-y="['top','top','top','top']"
											data-voffset="['82','70','70','209']"
											data-width="['560','560','560','320']"
											data-height="['560','560','560','320']"
											data-whitespace="nowrap"
											data-type="shape"
											data-responsive_offset="on"
											data-frames='[{"delay":410,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
											data-textalign="['inherit','inherit','inherit','inherit']"
											data-paddingtop="[0,0,0,0]"
											data-paddingright="[0,0,0,0]"
											data-paddingbottom="[0,0,0,0]"
											data-paddingleft="[0,0,0,0]"
											style={{
												zIndex: 5,
												backgroundColor: "rgb(236,244,246)",
												borderRadius: "280px 280px 280px 280px",
											}}>
											<div
												className="rs-looped rs-pulse"
												data-easing
												data-speed={5}
												data-zoomstart="0.8"
												data-zoomend="1.1">
												{" "}
											</div>
										</div>
										{/* LAYER NR. 2 */}
										<div
											className="tp-caption   tp-resizeme rs-parallaxlevel-1"
											id="slide-14-layer-4"
											data-x="['left','left','left','left']"
											data-hoffset="['836','132','84','33']"
											data-y="['top','top','top','top']"
											data-voffset="['351','414','464','469']"
											data-width="none"
											data-height="none"
											data-whitespace="nowrap"
											data-type="image"
											data-responsive_offset="on"
											data-frames='[{"delay":610,"speed":2170,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
											data-textalign="['inherit','inherit','inherit','inherit']"
											data-paddingtop="[0,0,0,0]"
											data-paddingright="[0,0,0,0]"
											data-paddingbottom="[0,0,0,0]"
											data-paddingleft="[0,0,0,0]"
											style={{zIndex: 6}}>
											<img
												src={featuredProduct.image ?? ""}
												alt=""
												data-ww="['788auto','762px','593px','422px']"
												data-hh="['402px','325px','253px','180px']"
												data-no-retina
											/>{" "}
										</div>
										{/* LAYER NR. 3 */}
										<div
											className="tp-caption   tp-resizeme"
											id="slide-14-layer-5"
											data-x="['right','right','right','right']"
											data-hoffset="['480','-41','-32','613']"
											data-y="['top','top','top','top']"
											data-voffset="['313','322','302','297']"
											data-fontsize="['77','70','70','130']"
											data-lineheight="['80','80','80','130']"
											data-fontweight="['700','600','600','600']"
											data-color="['rgb(51,51,51)','rgb(51,51,51)','rgb(51,51,51)','rgb(255,255,255)']"
											data-width="none"
											data-height="none"
											data-whitespace="nowrap"
											data-type="text"
											data-responsive_offset="on"
											data-frames='[{"delay":410,"speed":2020,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;rZ:90;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
											data-textalign="['inherit','inherit','inherit','inherit']"
											data-paddingtop="[0,0,0,0]"
											data-paddingright="[0,0,0,0]"
											data-paddingbottom="[0,0,0,0]"
											data-paddingleft="[0,0,0,0]"
											style={{
												zIndex: 7,
												whiteSpace: "nowrap",
												fontSize: "77px",
												lineHeight: "80px",
												fontWeight: 700,
												color: "#333333",
												letterSpacing: "0px",
												fontFamily: "Work Sans",
											}}
										/>
										{/* LAYER NR. 4 */}
										<div
											className="tp-caption tp-shape tp-shapewrapper  tp-resizeme rs-parallaxlevel-1"
											id="slide-14-layer-6"
											data-x="['left','left','left','left']"
											data-hoffset="['1583','794','549','330']"
											data-y="['top','top','top','top']"
											data-voffset="['315','406','407','394']"
											data-width={100}
											data-height={100}
											data-whitespace="nowrap"
											data-type="shape"
											data-responsive_offset="on"
											data-frames='[{"delay":800,"speed":1000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
											data-textalign="['inherit','inherit','inherit','inherit']"
											data-paddingtop="[0,0,0,0]"
											data-paddingright="[0,0,0,0]"
											data-paddingbottom="[0,0,0,0]"
											data-paddingleft="[0,0,0,0]"
											style={{zIndex: 8, backgroundColor: "rgb(51,51,51)", borderRadius: "50px 50px 50px 50px"}}>
											{" "}
										</div>
										{/* LAYER NR. 5 */}
										<div
											className="tp-caption   tp-resizeme rs-parallaxlevel-1"
											id="slide-14-layer-7"
											data-x="['right','right','right','right']"
											data-hoffset="['263','156','156','76']"
											data-y="['middle','middle','middle','middle']"
											data-voffset="['-49','41','41','29']"
											data-width="none"
											data-height="none"
											data-whitespace="nowrap"
											data-type="text"
											data-responsive_offset="on"
											data-frames='[{"delay":970,"speed":1400,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
											data-textalign="['inherit','inherit','inherit','inherit']"
											data-paddingtop="[0,0,0,0]"
											data-paddingright="[0,0,0,0]"
											data-paddingbottom="[0,0,0,0]"
											data-paddingleft="[0,0,0,0]"
											style={{
												zIndex: 9,
												whiteSpace: "nowrap",
												fontSize: "16px",
												lineHeight: "25px",
												fontWeight: 400,
												color: "#ffffff",
												letterSpacing: "1px",
												fontFamily: "Work Sans",
											}}>
											&nbsp;ONLY{" "}
										</div>
										{/* LAYER NR. 6 */}
										<div
											className="tp-caption   tp-resizeme rs-parallaxlevel-1"
											id="slide-14-layer-8"
											data-x="['right','right','right','right']"
											data-hoffset="['265','158','158','80']"
											data-y="['middle','middle','middle','middle']"
											data-voffset="['-22','72','72','60']"
											data-width="none"
											data-height="none"
											data-whitespace="nowrap"
											data-type="text"
											data-responsive_offset="on"
											data-frames='[{"delay":970,"speed":1410,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
											data-textalign="['inherit','inherit','inherit','inherit']"
											data-paddingtop="[0,0,0,0]"
											data-paddingright="[0,0,0,0]"
											data-paddingbottom="[0,0,0,0]"
											data-paddingleft="[0,0,0,0]"
											style={{
												zIndex: 10,
												whiteSpace: "nowrap",
												fontSize: "20px",
												lineHeight: "25px",
												fontWeight: 700,
												color: "#ffffff",
												letterSpacing: "1px",
												fontFamily: "Work Sans",
											}}>
											{featuredProduct.cost}
										</div>
										{/* LAYER NR. 7 */}
										<div
											className="tp-caption   tp-resizeme "
											id="slide-14-layer-9"
											data-x="['left','left','left','left']"
											data-hoffset="['287','93','89','21']"
											data-y="['top','top','top','top']"
											data-voffset="['170','73','58','108']"
											data-width="none"
											data-height="none"
											data-whitespace="nowrap"
											data-type="text"
											data-responsive_offset="on"
											data-frames='[{"delay":660,"speed":1280,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
											data-textalign="['inherit','inherit','inherit','inherit']"
											data-paddingtop="[0,0,0,0]"
											data-paddingright="[0,0,0,0]"
											data-paddingbottom="[0,0,0,0]"
											data-paddingleft="[0,0,0,0]"
											style={{
												zIndex: 11,
												whiteSpace: "nowrap",
												fontSize: "16px",
												lineHeight: "22px",
												fontWeight: 500,
												color: "#333333",
												letterSpacing: "2px",
												fontFamily: "Work Sans",
											}}>
											{featuredProduct.title}
										</div>
										{/* LAYER NR. 8 */}
										<div
											className="tp-caption   tp-resizeme"
											id="slide-14-layer-10"
											data-x="['left','left','left','left']"
											data-hoffset="['281','91','88','21']"
											data-y="['top','top','top','top']"
											data-voffset="['208','116','97','142']"
											data-fontsize="['48','48','48','40']"
											data-lineheight="['64','64','64','45']"
											data-width="none"
											data-height="none"
											data-whitespace="nowrap"
											data-type="text"
											data-responsive_offset="on"
											data-frames='[{"delay":1050,"speed":1230,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
											data-textalign="['inherit','inherit','inherit','inherit']"
											data-paddingtop="[0,0,0,0]"
											data-paddingright="[0,0,0,0]"
											data-paddingbottom="[0,0,0,0]"
											data-paddingleft="[0,0,0,0]"
											style={{
												zIndex: 12,
												whiteSpace: "nowrap",
												fontSize: "48px",
												lineHeight: "64px",
												width: "5rem",
												fontWeight: 400,
												color: "#333333",
												letterSpacing: "0px",
												fontFamily: "Work Sans",
											}}>
											<SplitWordToSentence word={featuredProduct.heading ?? ""} />
										</div>
										{/* LAYER NR. 9 */}
										<div
											className="tp-caption   tp-resizeme"
											id="slide-14-layer-11"
											data-x="['left','left','left','left']"
											data-hoffset="['282','90','90','23']"
											data-y="['top','top','top','top']"
											data-voffset="['368','283','262','250']"
											data-fontsize="['15','15','15','14']"
											data-width="20px"
											data-height="none"
											data-whitespace="nowrap"
											data-type="text"
											data-responsive_offset="on"
											data-frames='[{"delay":1300,"speed":1180,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
											data-textalign="['inherit','inherit','inherit','inherit']"
											data-paddingtop="[0,0,0,0]"
											data-paddingright="[0,0,0,0]"
											data-paddingbottom="[0,0,0,0]"
											data-paddingleft="[0,0,0,0]"
											style={{
												zIndex: 13,
												whiteSpace: "normal",
												fontSize: "15px",
												lineHeight: "26px",
												fontWeight: 400,
												color: "#7e7e7e",
												letterSpacing: "0.5px",
												width: "5rem",
												maxWidth: "30ch",
												fontFamily: "Work Sans",
											}}>
											{description.split("\n").map((i, key) => {
												return <div key={key}>{i}</div>;
											})}
										</div>
										{/* LAYER NR. 10 */}
										<div
											className="tp-caption Slider-button-alt rev-btn "
											id="slide-14-layer-12"
											data-x="['left','left','left','left']"
											data-hoffset="['282','91','89','29']"
											data-y="['top','top','top','top']"
											data-voffset="['600','384','364','349']"
											data-width="none"
											data-height="none"
											data-whitespace="nowrap"
											data-type="button"
											data-responsive_offset="on"
											data-responsive="off"
											data-frames='[{"delay":1580,"speed":1270,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(51,51,51);bg:transparent;"}]'
											data-textalign="['inherit','inherit','inherit','inherit']"
											data-paddingtop="[12,12,12,12]"
											data-paddingright="[35,35,35,35]"
											data-paddingbottom="[12,12,12,12]"
											data-paddingleft="[35,35,35,35]"
											style={{
												zIndex: 14,
												whiteSpace: "nowrap",
												letterSpacing: "1px",
												borderColor: "rgba(0,0,0,1)",
												outline: "none",
												boxShadow: "none",
												boxSizing: "border-box",
												MozBoxSizing: "border-box",
												WebkitBoxSizing: "border-box",
												cursor: "pointer",
											}}>
											<i className="fa fa-shopping-cart" aria-hidden="true" />
											<Link href={getBannerLink(featuredProduct.bannerProducts[0])}>
												<a className="revslider-button">&nbsp; ONLY {featuredProduct.cost}</a>
											</Link>
										</div>
									</li>
								</ul>
								<div className="tp-bannertimer tp-bottom" style={{visibility: "hidden"}} />{" "}
							</div>
						</div>
						{/* END REVOLUTION SLIDER */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProduct;

const SplitWordToSentence: React.FC<{word: string}> = (props) => {
	const {word} = props;
	return (
		<span className="name">
			{word.split(" ")[0]} {word.split(" ")[1]}
			<br />
			{word.split(" ").slice(2).join(" ")}
		</span>
	);
};

const splitSentence = (word: string, length: number): string => {
	const sentenceArray = word.split(" ");
	let sentenceSplitArray: any[] = [];
	let finalString = "";

	for (let i = 0; i < sentenceArray.length; i = i + length) {
		let subSetArray: string[] = [];
		createArrayFromRange(i + 1, i + length).forEach((index) => {
			subSetArray.push(sentenceArray[index]);
		});
		sentenceSplitArray.push(subSetArray);
	}

	sentenceSplitArray.forEach((sentence) => {
		finalString += sentence.join(" ") + "\n";
	});
	console.log(finalString);

	return finalString;
};

const createArrayFromRange = (startNumber: number, endNumber: number): number[] => {
	let newArray: number[] = [];

	for (let i = startNumber; i <= endNumber; i++) {
		newArray.push(i);
	}
	return newArray;
};
