import React from "react";
import {Page, Document, Image, StyleSheet} from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import BillTo from "./BillTo";
import InvoiceNo from "./InvoiceNo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";

const styles = StyleSheet.create({
	page: {
		fontFamily: "Helvetica",
		fontSize: 11,
		paddingTop: 30,
		paddingLeft: 60,
		paddingRight: 60,
		lineHeight: 1.5,
		flexDirection: "column",
	},
	logo: {
		width: "74px",
		height: "66px",
		marginLeft: "auto",
		marginRight: "auto",
	},
});

const Invoice: React.FC<any> = ({invoice}) => (
	<Document>
		<Page size="A4" style={styles.page}>
			<Image
				style={styles.logo}
				src={
					"https://firebasestorage.googleapis.com/v0/b/indoamerican-dev.appspot.com/o/logo.png?alt=media&token=b1a0fa43-d053-45f2-a609-542cd9f181b8"
				}
			/>
			<InvoiceTitle title="Invoice" />
			<InvoiceNo invoice={invoice} />
			<BillTo invoice={invoice} />
			<InvoiceItemsTable invoice={invoice} />
			<InvoiceThankYouMsg />
			
		</Page>
	</Document>
);

export default Invoice;
