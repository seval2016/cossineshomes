export const config = {
  project: {
    name: "Cossines Homes",
    slogan: "Unlocking Your Home's Potential, Together",
    description: `
			At the heart of our vision lies a resolute commitment to transform the landscape of the real estate industry.
			We're not just a company; we're on a mission to change the very essence of how real estate is perceived and experienced.
			Our journey is defined by innovation, transparency, and a relentless pursuit of excellence.
		`,
  },
  contact: {
    info: {
      phone1: {
        value: "+90-563-456-45-65",
        icon: "pi pi-phone",
        link: "tel:+112345645665",
      },
      email: {
        value: "info@cossineshomes.com",
        icon: "pi pi-envelope",
        link: "mailto:info@cossineshomes.com",
      },
      address: {
        value: "329 Queensberry Street, North Melbourne VIC 3051, Australia",
        icon: "pi pi-map-marker",
        link: "https://maps.google.com/?q=329+Queensberry+Street,+North+Melbourne+VIC+3051,+Australia",
      },
    },

    website: "https://www.cossineshomes.com",
    map: {
      embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8392975366726!2d144.95373531531583!3d-37.808480979751954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xfb4f4a69d8d7e7b0!2s329+Queensberry+St%2C+North+Melbourne+VIC+3051%2C+Australia!5e0!3m2!1sen!2sus!4v1591163721454!5m2!1sen!2sus",
    },

    addProperty: {
      title: "Add Property",
      link: "/add-property",
      icon: "pi pi-arrow-right",
    },

    socialMedia: {
      twitter: {
        url: "https://twitter.com",
        icon: "pi pi-twitter",
      },
      facebook: {
        url: "https://facebook.com",
        icon: "pi pi-facebook",
      },
      instagram: {
        url: "https://instagram.com",
        icon: "pi pi-instagram",
      },
      linkedin: {
        url: "https://linkedin.com",
        icon: "pi pi-linkedin",
      },
      youtube: {
        url: "https://youtube.com",
        icon: "pi pi-youtube",
      },
    },
  },

  apiURL: "https://cossineshomes.com/app", //swagger yada api koyulmalı
  propertyTypes: [
    { label: "House", value: "HOUSE" },
    { label: "Apartment", value: "APARTMENT" },
    { label: "Villa", value: "VILLA" },
    { label: "Office", value: "OFFICE" },
    { label: "Bungalow", value: "BUNGALOW" },
  ],
  cities: [
    { label: "İzmir", value: "IZMIR" },
    { label: "İstanbul", value: "ISTANBUL" },
    { label: "Antalya", value: "ANTALYA" },
    { label: "Bursa", value: "BURSA" },
    { label: "Ankara", value: "ANKARA" },
  ],
  userRolesOnRoutes: [
    {
      urlRegex: /\/dashboard$/,
      roles: ["ADMIN", "MANAGER", "AGENT", "USER"],
    },
    { urlRegex: /\/dashboard\/admin$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/manager$/, roles: ["ADMIN", "MANAGER"] },
    { urlRegex: /\/dashboard\/agent$/, roles: ["ADMIN", "MANAGER", "AGENT"] },
    { urlRegex: /\/dashboard\/user$/, roles: ["USER"] },
  ],
};
