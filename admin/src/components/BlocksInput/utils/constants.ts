export const codeLanguages: {
  value: string;
  label: string;
  decorate?: string;
}[] = [
  {
    value: 'javascript',
    label: 'JavaScript',
  },
  {
    value: 'jsx',
    label: 'JavaScript (React)',
  },
  {
    value: 'typescript',
    label: 'TypeScript',
    decorate: 'ts',
  },
  {
    value: 'tsx',
    label: 'TypeScript (React)',
  },
  {
    value: 'json',
    label: 'JSON',
  },
  {
    value: 'css',
    label: 'CSS',
  },
  {
    value: 'markdown',
    label: 'Markdown',
  },
  {
    value: 'bash',
    label: 'Bash',
  },
  {
    value: 'python',
    label: 'Python',
  },
  {
    value: 'php',
    label: 'PHP',
  },
  {
    value: 'sql',
    label: 'SQL',
  },
  {
    value: 'yaml',
    label: 'YAML',
    decorate: 'yml',
  },
  {
    value: 'plaintext',
    label: 'Plain text',
  },
];

export const ItemTypes = {
  COMPONENT: 'component',
  EDIT_FIELD: 'editField',
  FIELD: 'field',
  DYNAMIC_ZONE: 'dynamicZone',
  RELATION: 'relation',
  BLOCKS: 'blocks',
} as const;
