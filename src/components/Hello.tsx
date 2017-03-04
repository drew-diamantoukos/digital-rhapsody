import * as React from 'React';

export interface IHelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<IHelloProps, undefined> {
  public render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}
