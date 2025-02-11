import flattenDepth from 'lodash/flattenDepth';

const donate = {
  href: '/donate',
  name: 'Donate',
};

const services = {
  name: 'Services',
  href: '/services',
};

const about = {
  name: 'About Us',
  href: '/about',
};

const history = {
  name: 'History',
  href: '/history',
};

const team = {
  name: 'Our Team',
  href: '/team',
};

const contact = {
  name: 'Contact Us',
  href: '/contact',
};

const faq = {
  name: 'FAQ',
  href: '/faq',
};

const podcast = {
  name: 'Podcast',
  href: '/podcast',
};

const branding = {
  name: 'Branding',
  href: '/branding',
};

const getInvolved = {
  name: 'Get Involved',
  href: '/get_involved',
};

const profile = {
  name: 'Profile',
  href: '/profile',
};

const codeSchools = {
  name: 'Code Schools',
  href: '/code_schools',
};

const resources = {
  name: 'Resources',
  href: '/resources',
};

const merchStore = {
  name: 'Merch Store',
  href: '/swag',
};

const logout = {
  name: 'Logout',
  href: '/logout', // has a redirect in Next configuration file.
};

const login = {
  name: 'Login',
  href: '/login', // has a redirect in Next configuration file.
};

const jobs = {
  href: '/jobs',
  name: 'Job Board',
};

const sponsorship = {
  name: 'Sponsorship',
  href: '/sponsorship',
};

const projectRebuild = {
  name: 'Project Rebuild',
  href: '/project_rebuild',
};

// MARK: Top-level navigation items
const accountGroup = {
  name: 'Account',
  href: profile.href,
  sublinks: [profile, logout],
  icon: 'UserLogo',
};

const servicesGroup = {
  ...services,
  sublinks: [podcast, resources, codeSchools, projectRebuild],
};

const aboutUsGroup = {
  ...about,
  sublinks: [team, history, faq, branding],
};

const getInvolvedGroup = {
  ...getInvolved,
  sublinks: [sponsorship, merchStore, contact, donate],
};

// MARK: Nav items
export const loggedInNavItems = [aboutUsGroup, servicesGroup, getInvolvedGroup, accountGroup];
export const loggedOutNavItems = [aboutUsGroup, servicesGroup, getInvolvedGroup, login];

// Extracts sublinks to list everything as a single, top-level list
export const mobileLoggedInNavItems = flattenDepth(
  [
    logout,
    profile,
    about,
    getInvolved,
    ...servicesGroup.sublinks,
    ...getInvolvedGroup.sublinks,
  ].map(({ sublinks = [], ...item }) => [item, sublinks]),
  2,
);

export const mobileLoggedOutNavItems = flattenDepth(
  [login, about, getInvolved, ...servicesGroup.sublinks, ...getInvolvedGroup.sublinks].map(
    ({ sublinks = [], ...item }) => [item, sublinks],
  ),
  2,
);

// MARK: Footer items
export const footerItems = {
  column1: [about, contact, faq, services],
  column2: [codeSchools, resources, jobs],
  column3: [getInvolved, podcast, history, donate],
  column4: [
    {
      href: '/press',
      name: 'Press',
    },
    branding,
    team,
  ],
  legal: [
    {
      href: '/terms',
      name: 'Terms of Use',
    },
    {
      // NOTE: If you change this route, please update the redirect in `vercel.json` as well
      href: 'https://www.iubenda.com/privacy-policy/8174861',
      name: 'Privacy',
      analyticsEventLabel: 'Privacy',
    },
  ],
};
