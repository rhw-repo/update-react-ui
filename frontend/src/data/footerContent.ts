export interface FooterContent {
  titleOne: string;
  addressOneLineOne: string;
  addressOneLineTwo: string;
  addressOneLineThree: string;
  telephoneOne: string;
  telephoneTwo: string;
  companyNumberOne: string;
  titleTwo: string;
  addressTwoLineOne: string;
  addressTwoLineTwo: string;
  addressTwoLineThree: string;
  companyNumberTwo: string;
  additionalInfoTwo: string;
  subtext: string;
}

const footerContent: FooterContent = {
  titleOne: "Vorlond HQ",
  companyNumberOne: "Company Registration Number:\nB-87341296",
  addressOneLineOne: "Calle de Alcalá 112, Floor 6,",
  addressOneLineTwo: "Suite 4B",
  addressOneLineThree: "Madrid, Spain, 28009",
  telephoneOne: "Tel: +34 91 456 7823",
  titleTwo: "Vorlond London",
  addressTwoLineOne: "24 Fenchurch Street, Floor 12,",
  addressTwoLineTwo: "Suite 3",
  addressTwoLineThree: "London, United Kingdom, EC3M 3BY",
  telephoneTwo: "Tel: +44 20 7946 0523",
  companyNumberTwo: "Company Registration Number:\n09876543",
  additionalInfoTwo: "Legal information:",
  subtext: `Nothing on this website constitutes financial, investment or
    legal advice, and should not be relied upon as such. Vorlond is a
    fictional company created for a demo submission to Chingu.`,
};

export default footerContent;
