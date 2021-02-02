import { gql } from "@apollo/client";



export const GetFaqTitles = gql`
	query GetFaqTitles {
		faqTitles: faq_titles {
			id
			title
			faqs {
				id
				question
				answer
			}
		}
	}
`;