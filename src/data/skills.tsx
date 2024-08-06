import { NeovimIcon } from '@/components/icons/Neovim';
import { RedisIcon } from '@/components/icons/Redis';
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
        name: 'Express',
        icon: <ExpressIcon />,
      },
      {
        name: 'React',
        icon: <ReactIcon />,
      },
     
      { name: 'Nextjs', icon: <NextIcon /> },
      {
        name: 'Tailwindcss',
        icon: <TailwindIcon />,
      },
      {
        name: 'Git',
        icon: <GitIcon />,
      },
      {
        name: 'Docker',
        icon: <DockerIcon />,
      },
     
      {
        name: 'Linux',
        icon: <LinuxIcon />,
      },
      {
        name:'Neovim',
        icon:<NeovimIcon/>
      },
      {
        name:'Redis',
        icon:<RedisIcon/>
      }
      
  ];
  

  