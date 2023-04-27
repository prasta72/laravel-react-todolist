import { AddKontak, DeafultLayouts, ListKontak } from "..";


export default function appLayout() {
  return (
    <>
      <div title="appLayout">
        <DeafultLayouts />
        <AddKontak />
        <hr />
        <ListKontak />
      </div>
    </>
  );
}

