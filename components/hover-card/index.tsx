import * as React from "react";
import { Popover } from "radix-ui";
import "./styles.css";

const PopoverDemo = ({ children }: { children: React.ReactNode }) => (
  <Popover.Root>
    <Popover.Trigger asChild>{children}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
          className="bg-neutral-800 rounded-lg border-2 border-white/20 p-2"
        >
          <p>Germany</p>
          <p>High Risk: 10 Suppliers</p>
          <p>GOTS, ISO45001</p>
        </div>
        <Popover.Close
          className="PopoverClose"
          aria-label="Close"
        ></Popover.Close>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
