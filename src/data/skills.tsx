import {
    BashIcon,
    DockerIcon,
    ExpressIcon,
    GitIcon,
    JavascriptIcon,
    MongoIcon,
    NextIcon,
    PostgresIcon,
    ReactIcon,
    TailwindIcon,
    TypescriptIcon,
  
    LinuxIcon
  } from '@/components/icons/icons';


  export type SkillProps = {
    name: string;
    icon: JSX.Element;
  };
  
  export const SKILLS: SkillProps[] = [
    {
      name: 'Javascript',
      icon: <JavascriptIcon />,
    },
    {
      name: 'Typescript',
      icon: <TypescriptIcon />,
    },
    {
      name: 'Bash',
      icon: <BashIcon />,
    },
    {
        name: 'Postgres',
        icon: <PostgresIcon />,
      },
      
      {
        name: 'Mongodb',
        icon: <MongoIcon />,
      },
      {
        name: 'express',
        icon: <ExpressIcon />,
      },
      {
        name: 'react',
        icon: <ReactIcon />,
      },
     
      { name: 'nextjs', icon: <NextIcon /> },
      {
        name: 'tailwindcss',
        icon: <TailwindIcon />,
      },
      {
        name: 'git',
        icon: <GitIcon />,
      },
      {
        name: 'docker',
        icon: <DockerIcon />,
      },
     
      {
        name: 'linux',
        icon: <LinuxIcon />,
      },
      
  ];
  

  