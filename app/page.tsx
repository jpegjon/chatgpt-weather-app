"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default () => (
  <div className="min-h-screen bg-gradient-to-br from-[#394f6b] to-[#183b7e] p-10 flex flex-col justify-center">
    <Card className="max-w-4xl mx-auto">
      <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
      <Subtitle className="text-xl text-center">
        Powered by OpenAI, Next.js, Tailwind CSS, Tremor 2.0 + more.
      </Subtitle>
      <Divider className="my-10" />
      <Card className="bg-gradient-to-br from-[#394f6b] to-[#183b7e]">
        <CityPicker />
      </Card>
    </Card>
  </div>
);
