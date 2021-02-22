import React from "react";
import styles from "./Invoice.scss";
import {Document, Page} from "@react-pdf/renderer";

const Invoice = () => {
	return (
		<Document>
			<Page>
				<div id="invoiceholder">
					<div id="invoice" className={styles.effect2}>
						<div id="invoice-top">
							<div className={styles.logo}>
								<img src="https://www.almonature.com/wp-content/uploads/2018/01/logo_footer_v2.png" alt="Logo" />
							</div>
							<div className={styles.title}>
								<h1>
									Invoice #<span className={`${styles.invoiceVal} ${styles.invoice_num}`}>tst-inv-23</span>
								</h1>
								<p>
									Invoice Date: <span id="invoice_date">01 Feb 2018</span>
									<br />
									GL Date: <span id="gl_date">23 Feb 2018</span>
								</p>
							</div>
							{/*End Title*/}
						</div>
						{/*End InvoiceTop*/}
						<div id="invoice-mid">
							<div id="message">
								<h2>Hello Andrea De Asmundis,</h2>
								<p>
									An invoice with invoice number #<span id="invoice_num">tst-inv-23</span> is created for{" "}
									<span id="supplier_name">TESI S.P.A.</span> which is 100% matched with PO and is waiting for your
									approval. <a href="javascript:void(0);">Click here</a> to login to view the invoice.
								</p>
							</div>
							<div className={`${styles["cta-group"]} ${styles["mobile-btn-group"]}`}>
								<a href="javascript:void(0);" className={styles["btn-primary"]}>
									Approve
								</a>
								<a href="javascript:void(0);" className={styles["btn-default"]}>
									Reject
								</a>
							</div>
							<div className={styles.clearfix}>
								<div className={styles["col-left"]}>
									<div className={styles.clientlogo}>
										<img
											src="https://cdn3.iconfinder.com/data/icons/daily-sales/512/Sale-card-address-512.png"
											alt="Sup"
										/>
									</div>
									<div className={styles.clientinfo}>
										<h2 id="supplier">TESI S.P.A.</h2>
										<p>
											<span id="address">VIA SAVIGLIANO, 48</span>
											<br />
											<span id="city">RORETO DI CHERASCO</span>
											<br />
											<span id="country">IT</span> - <span id="zip">12062</span>
											<br />
											<span id="tax_num">555-555-5555</span>
											<br />
										</p>
									</div>
								</div>
								<div className={styles["col-right"]}>
									<table className={styles.table}>
										<tbody>
											<tr>
												<td>
													<span>Invoice Total</span>
													<label id="invoice_total">61.2</label>
												</td>
												<td>
													<span>Currency</span>
													<label id="currency">EUR</label>
												</td>
											</tr>
											<tr>
												<td>
													<span>Payment Term</span>
													<label id="payment_term">60 gg DFFM</label>
												</td>
												<td>
													<span>Invoice Type</span>
													<label id="invoice_type">EXP REP INV</label>
												</td>
											</tr>
											<tr>
												<td colSpan={2}>
													<span>Note</span>#<label id="note">None</label>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						{/*End Invoice Mid*/}
						<div id="invoice-bot">
							<div id="table">
								<table className={styles["table-main"]}>
									<thead>
										<tr className={styles.tabletitle}>
											<th>Type</th>
											<th>Description</th>
											<th>Quantity</th>
											<th>Unit Price</th>
											<th>Total</th>
										</tr>
									</thead>
									<tbody>
										<tr className={styles["list-item"]}>
											<td data-label="Type" className={styles.tableitem}>
												ITEM
											</td>
											<td data-label="Description" className={styles.tableitem}>
												Servizio EDI + Traffico mese di novembre 2017
											</td>
											<td data-label="Quantity" className={styles.tableitem}>
												46.6
											</td>
											<td data-label="Unit Price" className={styles.tableitem}>
												1
											</td>
											<td data-label="Total" className={styles.tableitem}>
												55.92
											</td>
										</tr>
										<tr className={styles["list-item"]}>
											<td data-label="Type" className={styles.tableitem}>
												ITEM
											</td>
											<td data-label="Description" className={styles.tableitem}>
												Servizio EDI + Traffico mese di novembre 2017
											</td>
											<td data-label="Quantity" className={styles.tableitem}>
												46.6
											</td>
											<td data-label="Unit Price" className={styles.tableitem}>
												1
											</td>
											<td data-label="Total" className={styles.tableitem}>
												55.92
											</td>
										</tr>
										<tr className={`${styles["list-item"]} ${styles["total-row"]}`}>
											<th colSpan={9} className={styles.tableitem}>
												Grand Total
											</th>
											<td data-label="Grand Total" className={styles.tableitem}>
												111.84
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							{/*End Table*/}
						</div>
						{/*End InvoiceBot*/}
						<footer>
							{/* <div id="legalcopy" className={styles.clearfix}>
							<p className={styles["col-right"]}>
								Our mailing address is:
								<span className={styles.email}>
									<a href="mailto:supplier.portal@almonature.com">supplier.portal@indoameri.com</a>
								</span>
							</p>
						</div> */}
						</footer>
					</div>
				</div>
			</Page>
		</Document>
	);
};

export default Invoice;
