"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Database,
  Cloud,
  GitBranch,
  Server,
  Monitor,
  Palette,
  Zap,
  Brush,
  Cpu,
  Layers,
  Terminal,
  Settings,
  Package,
  LayoutGrid,
  Workflow,
  Move,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      { name: "React.js", icon: Layers, color: "text-sky-500" },
      { name: "Next.js", icon: Code, color: "text-black dark:text-white" },
      { name: "JavaScript", icon: Code, color: "text-yellow-500" },
      { name: "HTML & CSS", icon: Brush, color: "text-orange-500" },
      { name: "Tailwind CSS", icon: Palette, color: "text-cyan-500" },
      { name: "Bootstrap", icon: Terminal, color: "text-purple-500" },
      { name: "Shadcn/ui", icon: Package, color: "text-pink-500" },
      { name: "Framer Motion", icon: Move, color: "text-rose-500" },
      { name: "Aos Animation", icon: Move, color: "text-green-500" },
    ],
  },
  {
    title: "Backend Development Basic Knowledge",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server, color: "text-green-600" },
      {
        name: "Express.js",
        icon: Code,
        color: "text-gray-700 dark:text-gray-300",
      },
      { name: "MongoDB", icon: Database, color: "text-green-500" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Settings,
    skills: [
      { name: "Git & GitHub", icon: GitBranch, color: "text-orange-600" },
      { name: "Vercel", icon: Cloud, color: "text-gray-900 dark:text-white" },
      { name: "AWS (S3 Bucket)", icon: Cpu, color: "text-yellow-600" },
      { name: "VS Code", icon: Zap, color: "text-blue-500" },
      { name: "Postman", icon: Zap, color: "text-orange-500" },
      { name: "Trello", icon: LayoutGrid, color: "text-blue-400" },
      { name: "Jira", icon: Workflow, color: "text-blue-600" },
    ],
  },
  {
    title: "Web3 Development",
    icon: Cpu,
    skills: [
      { name: "MetaMask Integration", icon: Cpu, color: "text-orange-500" },
      { name: "Smart Contracts", icon: Code, color: "text-purple-500" },
      { name: "Ethereum (ETH)", icon: Database, color: "text-indigo-500" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="w-full py-16 bg-[#F9FAFF] dark:bg-gray-900" id="Skills">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            My Skills
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            A comprehensive overview of my technical expertise and the tools I
            use to create fast, scalable, and beautiful web applications.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800"
            >
              <CardHeader className="flex flex-row items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                <category.icon className="h-7 w-7 text-yellow-500" />
                <CardTitle className="text-lg font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-3 pt-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors"
                  >
                    <skill.icon className={`h-4 w-4 ${skill.color}`} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
