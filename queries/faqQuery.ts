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

export const GetTestimonials = gql`
	query GetTestimonials {
		testimonials(order_by: {id: asc}, where: {isDeleted: {_eq: false}}) {
			author
			designation
			id
			testimonial
		}
	}
`;