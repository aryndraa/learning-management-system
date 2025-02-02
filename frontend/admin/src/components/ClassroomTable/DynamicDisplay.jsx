import {Table} from "../../components/ClassroomTable/Table.jsx";
import {Item} from "../../components/ClassroomTable/Item.jsx";

export const DynamicDisplay = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 w-full bg-white p-4 lg:hidden">
        <Item/>
        <Item/>
        <Item/>
      </div>
      <div className="hidden lg:block">
        <Table/>
      </div>
    </>
  )
}

