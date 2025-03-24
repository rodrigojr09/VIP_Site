export interface NavLinkType {
	text: string;
	href: string;
}

export interface LaudoCardProps {
  laudo: LaudoType;
  isSelected: boolean;
  onClick: (id: string) => void;
}

export interface LaudoType {
  id: string;
  image: string;
  description: string;
}