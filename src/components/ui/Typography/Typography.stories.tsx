import type { Meta, StoryObj } from "@storybook/react";
import Typography from "@/components/ui/Typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: false,
    },
    as: {
      control: false,
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    size: "displayXl",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-10">
        <Typography {...args} size="display2xl">
          This is <strong>Display 2xl</strong> text
        </Typography>
        <Typography {...args} size="displayXl">
          This is <strong>Display XL</strong> text
        </Typography>
        <Typography {...args} size="displayLg">
          This is <strong>Display Large</strong> text
        </Typography>
        <Typography {...args} size="displayMd">
          This is <strong>Display Medium</strong> text
        </Typography>
        <Typography {...args} size="displaySm">
          This is <strong>Display Small</strong> text
        </Typography>
        <Typography {...args} size="lg">
          This is <strong>Large</strong> text
        </Typography>
        <Typography {...args} size="base">
          This is <strong>Base</strong> text
        </Typography>
        <Typography {...args} size="sm">
          This is <strong>Small</strong> text
        </Typography>
        <Typography {...args} size="xs">
          This is <strong>Extra Small</strong> text
        </Typography>
      </div>
    );
  },
};
