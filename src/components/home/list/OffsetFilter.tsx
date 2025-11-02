import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useFilterStore } from "@/stores/usePokedexFilters";

export const OffsetFilter = () => {
  const { from, setFrom, to, setTo } = useFilterStore();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="from">From</label>

      <InputGroup className="bg-white max-w-20">
        <InputGroupAddon>
          <span className="text-gray-400">#</span>
        </InputGroupAddon>

        <InputGroupInput
          type="text"
          id="from"
          className="text-gray-800"
          value={from ?? ""}
          onChange={(e) => {
            const value = Number(e.target.value.replace(/[^\d.-]/g, ""));

            if (value == 0) {
              setFrom(null);
              return;
            }
            setFrom(value);
          }}
        />
      </InputGroup>

      <label htmlFor="to">To</label>

      <InputGroup className="bg-white max-w-20">
        <InputGroupAddon>
          <span className="text-gray-400">#</span>
        </InputGroupAddon>

        <InputGroupInput
          type="text"
          id="to"
          className="text-gray-800"
          value={to ?? ""}
          onChange={(e) => {
            const value = Number(e.target.value.replace(/[^\d.-]/g, ""));

            if (value == 0) {
              setTo(null);
              return;
            }
            setTo(value);
          }}
        />
      </InputGroup>
    </div>
  );
};
