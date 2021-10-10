import { Button } from "./src";

export default {
  title: "Button",
  decorators: [
    (Story: any) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

export const basic = () => (
  <>
    <Button>{"Button"}</Button>
  </>
)


