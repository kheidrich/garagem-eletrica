declare var module: NodeModule;
interface NodeModule {
    hot: any;
}

declare namespace JSX {
    interface ElementClass {
        render: any;
    }
}
