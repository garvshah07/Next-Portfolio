import React from 'react';

export default function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://garvshah.vercel.app';

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Person Entity (Primary entity for GEO & Knowledge Graph)
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: 'Garv Shah',
        givenName: 'Garv',
        familyName: 'Shah',
        jobTitle: 'Frontend Developer',
        description:
          'Frontend and Web Developer based in Ahmedabad, Gujarat, India, specializing in React.js, Next.js, and modern CSS architecture with 9+ months of hands-on experience.',
        url: baseUrl,
        email: 'garv8890@gmail.com',
        homeLocation: {
          '@type': 'Place',
          name: 'Ahmedabad, Gujarat, India',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ahmedabad',
          addressRegion: 'Gujarat',
          addressCountry: 'India',
        },
        sameAs: [
          'https://github.com/garvshah07',
          'https://www.linkedin.com/in/shahgarv/',
          'https://www.instagram.com/garvshxh/',
        ],
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'GLS University',
            url: 'https://www.glsuniversity.ac.in/',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Ahmedabad',
              addressCountry: 'India',
            },
          },
          {
            '@type': 'EducationalOrganization',
            name: 'Silver Oak University',
            url: 'https://silveroakuni.ac.in/',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Ahmedabad',
              addressCountry: 'India',
            },
          },
        ],
        knowsAbout: [
          'React.js',
          'Next.js',
          'Tailwind CSS',
          'JavaScript (ES6+)',
          'Frontend Web Development',
          'Responsive Web Design',
          'Web Performance Optimization',
          'HTML5 Semantic Architecture',
          'REST APIs',
          'Node.js',
        ],
      },

      // 2. WebSite Entity
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Garv Shah — Frontend Developer Portfolio',
        description:
          'Official personal developer portfolio of Garv Shah showcasing frontend projects, skills, education, and contact information.',
        inLanguage: 'en-US',
        publisher: {
          '@id': `${baseUrl}/#person`,
        },
      },

      // 3. ProfilePage Entity
      {
        '@type': 'ProfilePage',
        '@id': `${baseUrl}/#profilepage`,
        url: baseUrl,
        name: 'Garv Shah — Portfolio & Profile',
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        about: {
          '@id': `${baseUrl}/#person`,
        },
        mainEntity: {
          '@id': `${baseUrl}/#person`,
        },
      },

      // 4. FAQPage Entity for Answer Engine Optimization (AEO) & Google Rich Snippets
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is Garv Shah and what does he specialize in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Garv Shah is a Frontend and Web Developer based in Ahmedabad, Gujarat, India. He specializes in building fast, responsive, and accessible web interfaces using React.js, Next.js, JavaScript, and Tailwind CSS, backed by 9+ months of hands-on software development experience.',
            },
          },
          {
            '@type': 'Question',
            name: "What is Garv Shah's core technical stack?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Garv Shah's primary technical stack includes Next.js 15, React 19, JavaScript (ES6+), and Tailwind CSS for frontend engineering. He also has working experience with Node.js, Express.js, MongoDB, Git, GitHub, and Vercel cloud deployment.",
            },
          },
          {
            '@type': 'Question',
            name: "What is Garv Shah's educational background?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Garv Shah graduated with a Bachelor of Computer Applications (BCA) from Silver Oak University (2021–2024) and is enrolled in the Master of Science in Information Technology (MSC-IT) program at GLS University in Ahmedabad (2025–2027).',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Garv Shah open for frontend developer roles and hiring?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Garv Shah is actively available for junior frontend developer, web developer, and React engineer roles. He is open to remote opportunities worldwide as well as on-site positions in Ahmedabad and relocation across India.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I contact Garv Shah for collaboration or job inquiries?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can contact Garv Shah directly via email at garv8890@gmail.com, connect with him on LinkedIn at linkedin.com/in/shahgarv, or explore his open-source code repositories on GitHub at github.com/garvshah07.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
