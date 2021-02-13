import React from "react";
import {Instruction_Titles} from "../../generated/graphql";

interface ProductInstructionProps {
	instructionTitles: Instruction_Titles[];
}
const ProductInstruction: React.FC<ProductInstructionProps> = (props) => {
	const {instructionTitles} = props;

	return (
		<div className="row">
			<div className="col-lg-12">
				{/*=======  shop product description tab  =======*/}
				<div className="shop-product__description-tab pt-100">
					{/*=======  tab navigation  =======*/}
					<div className="tab-product-navigation tab-product-navigation--product-desc mb-50">
						<div className="nav nav-tabs justify-content-center" id="nav-tab2" role="tablist">
							{instructionTitles.map((title, index) => (
								<a
									key={title.id}
									className={`nav-item nav-link ${!index && "active"}`}
									id={`product-tab-${index + 1}`}
									data-toggle="tab"
									href={`#product-series-${index + 1}`}
									role="tab"
									aria-selected={!!index}>
									{title.name} {title.typeId === 3 && `(${title.instructions.length})`}
								</a>
							))}
						</div>
					</div>
					{/*=======  End of tab navigation  =======*/}
					{/*=======  tab content  =======*/}
					<div className="tab-content" id="nav-tabContent2">
						{instructionTitles.map((title, index) => (
							<Instruction instructionTitle={title} index={index} key={title.id} />
						))}
					</div>
				</div>
			</div>
			{/*=======  End of tab content  =======*/}
		</div>
	);
};

export default ProductInstruction;

const Instruction: React.FC<{instructionTitle: Instruction_Titles; index: number}> = (props) => {
	const {instructionTitle, index} = props;
	return (
		<div className={`tab-pane fade ${!index && " show active"}`} id={`product-series-${index + 1}`} role="tabpanel" aria-labelledby={`product-tab-${index + 1}`}>
			<div className="shop-product__additional-info">
				<table className="shop-attributes">
					<tbody>
						{instructionTitle.typeId === 2
							? instructionTitle.instructions.map((instruction) => (
									<tr key={instruction.id}>
										<th>
											{index < 9 && "0"}
											{instruction.index}
										</th>
										<td>
											<p style={{textAlign: "left"}}>
												{instruction.title && <strong>{instruction.title}:</strong>} {instruction.description}
											</p>
										</td>
									</tr>
							  ))
							: instructionTitle.instructions.map((instruction) => (
									<div className="single-review" key={instruction.id}>
										<div className="single-review__content">
											{/*=======  username and date  =======*/}
											<a href={instruction.mediaUrl ?? "#"} target="_blank">
												<p className="username">
													{instruction.title}
													<span className="date">/ file</span>
												</p>{" "}
											</a>
											{/*=======  End of username and date  =======*/}
											{/*=======  message  =======*/}
											<p className="message">{instruction.description}</p>
											{/*=======  End of message  =======*/}
										</div>
									</div>
							  ))}
					</tbody>
				</table>
			</div>
			{/*=======  End of shop product additional information  =======*/}
		</div>
	);
};
