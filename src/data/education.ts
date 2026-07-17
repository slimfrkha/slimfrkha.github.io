// Education. Degree wording verbatim from the resume; ENIT and notes from LinkedIn.

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  note?: string;
};

export const education: Education[] = [
  {
    school: 'ENSTA Paris, Institut Polytechnique de Paris',
    degree: 'Engineering, computer science | Master of Science',
    start: '2011',
    end: '2014',
    note: 'Top-5 French engineering school. Coursework in information-systems architecture, software architecture, and security. Engineering double degree.',
  }
];
