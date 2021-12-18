import Link, { LinkProps } from 'next/link'; 
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react'; // CloneElement serve para clonar um elemento e modificar coisas nele; 

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest}: ActiveLinkProps){
  const { asPath } = useRouter(); // asPath retorna a rota que estava sendo acessada; 

  const className = asPath === rest.href 
    ? activeClassName 
    : '';

  return (
    <Link {...rest}>
      {
        cloneElement(children, {
          className,
        })
      }
    </Link>
  )
}