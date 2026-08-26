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
  titleTwo: "Vorland London",
  addressTwoLineOne: "24 Fenchurch Street, Floor 12,",
  addressTwoLineTwo: "Suite 3",
  addressTwoLineThree: "London, United Kingdom, EC3M 3BY",
  telephoneTwo: "Tel: +44 20 7946 0523",
  companyNumberTwo: "Company Registration Number:\n09876543",
  additionalInfoTwo: "Legal information:",
  subtext: `This website is owned by and operated on behalf of Vorlond.
    All content, trademarks and logos displayed on this site remain the
    property of Vorlond or its licensors and may not be reproduced without
    prior written consent. Nothing on this website constitutes financial,
    investment or legal advice, and should not be relied upon as such.
    Vorlond accepts no liability for any loss arising from reliance on the
    information provided.`,
};

export default footerContent;
