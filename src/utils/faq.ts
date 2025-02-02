export interface FAQ {
  id?: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I become a distributor?",
    answer:
      "If you are interested in carrying Eat Plant products, please complete the form below, and we’ll be in touch soon.",
  },
  {
    id: 2,
    question: "Are Eat Plant products allergen free?",
    answer:
      "At Eat Plant we are passionate about creating products full of flavour and accessible to all. We currently have an expanding range of products which are allergen free and we are working hard behind the scenes to remove all allergens from the entire Eat Plant range.",
  },
  {
    id: 3,
    question:
      "Eat Plant Products look like meat but are they really meat free?",
    answer:
      "Absolutely! All the Eat Plant products are plant-based and vegan friendly!",
  },
];
