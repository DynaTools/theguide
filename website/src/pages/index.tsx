import type {ReactNode} from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home(): ReactNode {
  return <Redirect to="/docs/category/1-fundamentos-da-ia" />;
}
