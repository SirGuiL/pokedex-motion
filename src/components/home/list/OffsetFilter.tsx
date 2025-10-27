import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export const OffsetFilter = () => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="from">From</label>

      <InputGroup className="bg-white max-w-20">
        <InputGroupAddon>
          <span className="text-gray-400">#</span>
        </InputGroupAddon>

        <InputGroupInput type="text" id="from" className="text-gray-800" />
      </InputGroup>

      <label htmlFor="to">To</label>

      <InputGroup className="bg-white max-w-20">
        <InputGroupAddon>
          <span className="text-gray-400">#</span>
        </InputGroupAddon>

        <InputGroupInput type="text" id="to" className="text-gray-800" />
      </InputGroup>
    </div>
  );
};
