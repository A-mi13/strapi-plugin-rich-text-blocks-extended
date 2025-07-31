import * as React from 'react';
import { Typography, TypographyComponent } from '@strapi/design-system';
import {
  HeadingFive,
  HeadingFour,
  HeadingOne,
  HeadingSix,
  HeadingThree,
  HeadingTwo,
} from '@strapi/icons';
import { Editor } from 'slate';
import { styled } from 'styled-components';

import { type BlocksStore } from '../BlocksEditor';
import { baseHandleConvert } from '../utils/conversions';
import { type Block, type CustomElement } from '../utils/types';

const H1 = styled(Typography).attrs({ tag: 'h1' })<{ $fontColor?: string; $fontFamily?: string }>`
  font-size: 4.2rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  color: ${({ $fontColor }) => $fontColor || 'inherit'};
  font-family: ${({ $fontFamily }) => $fontFamily || 'inherit'};
`;

const H2 = styled(Typography).attrs({ tag: 'h2' })<{ $fontColor?: string; $fontFamily?: string }>`
  font-size: 3.5rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  color: ${({ $fontColor }) => $fontColor || 'inherit'};
  font-family: ${({ $fontFamily }) => $fontFamily || 'inherit'};
`;

const H3 = styled(Typography).attrs({ tag: 'h3' })<{ $fontColor?: string; $fontFamily?: string }>`
  font-size: 2.9rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  color: ${({ $fontColor }) => $fontColor || 'inherit'};
  font-family: ${({ $fontFamily }) => $fontFamily || 'inherit'};
`;

const H4 = styled(Typography).attrs({ tag: 'h4' })<{ $fontColor?: string; $fontFamily?: string }>`
  font-size: 2.4rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  color: ${({ $fontColor }) => $fontColor || 'inherit'};
  font-family: ${({ $fontFamily }) => $fontFamily || 'inherit'};
`;

const H5 = styled(Typography).attrs({ tag: 'h5' })<{ $fontColor?: string; $fontFamily?: string }>`
  font-size: 2rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  color: ${({ $fontColor }) => $fontColor || 'inherit'};
  font-family: ${({ $fontFamily }) => $fontFamily || 'inherit'};
`;

const H6 = styled(Typography).attrs({ tag: 'h6' })<{ $fontColor?: string; $fontFamily?: string }>`
  font-size: 1.6rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  color: ${({ $fontColor }) => $fontColor || 'inherit'};
  font-family: ${({ $fontFamily }) => $fontFamily || 'inherit'};
`;

/**
 * Common handler for converting a node to a heading
 */
const handleConvertToHeading = (editor: Editor, level: Block<'heading'>['level']) => {
  baseHandleConvert<Block<'heading'>>(editor, { type: 'heading', level } as never);
};

const headingBlocks: Pick<
  BlocksStore,
  'heading-one' | 'heading-two' | 'heading-three' | 'heading-four' | 'heading-five' | 'heading-six'
> = {
  'heading-one': {
    renderElement: (props) => {
      const element = props.element as CustomElement;
      return <H1 $fontColor={element.fontColor} $fontFamily={element.fontFamily} {...props.attributes}>{props.children}</H1>;
    },
    icon: HeadingOne,
    label: {
      id: 'components.Blocks.blocks.heading1',
      defaultMessage: 'Heading 1',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 1 as never),
    matchNode: (node) => node.type === 'heading' && node.level === 1,
    isInBlocksSelector: true,
    snippets: ['#'],
    dragHandleTopMargin: '14px',
  },
  'heading-two': {
    renderElement: (props) => {
      const element = props.element as CustomElement;
      return <H2 $fontColor={element.fontColor} $fontFamily={element.fontFamily} {...props.attributes}>{props.children}</H2>;
    },
    icon: HeadingTwo,
    label: {
      id: 'components.Blocks.blocks.heading2',
      defaultMessage: 'Heading 2',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 2 as never),
    matchNode: (node) => node.type === 'heading' && node.level === 2,
    isInBlocksSelector: true,
    snippets: ['##'],
    dragHandleTopMargin: '10px',
  },
  'heading-three': {
    renderElement: (props) => {
      const element = props.element as CustomElement;
      return <H3 $fontColor={element.fontColor} $fontFamily={element.fontFamily} {...props.attributes}>{props.children}</H3>;
    },
    icon: HeadingThree,
    label: {
      id: 'components.Blocks.blocks.heading3',
      defaultMessage: 'Heading 3',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 3 as never),
    matchNode: (node) => node.type === 'heading' && node.level === 3,
    isInBlocksSelector: true,
    snippets: ['###'],
    dragHandleTopMargin: '7px',
  },
  'heading-four': {
    renderElement: (props) => {
      const element = props.element as CustomElement;
      return <H4 $fontColor={element.fontColor} $fontFamily={element.fontFamily} {...props.attributes}>{props.children}</H4>;
    },
    icon: HeadingFour,
    label: {
      id: 'components.Blocks.blocks.heading4',
      defaultMessage: 'Heading 4',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 4 as never),
    matchNode: (node) => node.type === 'heading' && node.level === 4,
    isInBlocksSelector: true,
    snippets: ['####'],
    dragHandleTopMargin: '4px',
  },
  'heading-five': {
    renderElement: (props) => {
      const element = props.element as CustomElement;
      return <H5 $fontColor={element.fontColor} $fontFamily={element.fontFamily} {...props.attributes}>{props.children}</H5>;
    },
    icon: HeadingFive,
    label: {
      id: 'components.Blocks.blocks.heading5',
      defaultMessage: 'Heading 5',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 5 as never),
    matchNode: (node) => node.type === 'heading' && node.level === 5,
    isInBlocksSelector: true,
    snippets: ['#####'],
  },
  'heading-six': {
    renderElement: (props) => {
      const element = props.element as CustomElement;
      return <H6 $fontColor={element.fontColor} $fontFamily={element.fontFamily} {...props.attributes}>{props.children}</H6>;
    },
    icon: HeadingSix,
    label: {
      id: 'components.Blocks.blocks.heading6',
      defaultMessage: 'Heading 6',
    },
    handleConvert: (editor) => handleConvertToHeading(editor, 6 as never),
    matchNode: (node) => node.type === 'heading' && node.level === 6,
    isInBlocksSelector: true,
    snippets: ['######'],
    dragHandleTopMargin: '-2px',
  },
};

export { headingBlocks };
