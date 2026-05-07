import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import {
	Facebook as FacebookIcon,
	Frame as FrameIcon,
	Instagram as InstagramIcon,
	Linkedin as LinkedinIcon,
	Youtube as YoutubeIcon,
	BrainCircuit,
} from 'lucide-react';
import { Button } from './button';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}
interface FooterLinkGroup {
	label: string;
	links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<'footer'>;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end end'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);
	const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

	return (
		<footer
			ref={containerRef}
			className={cn('relative w-full overflow-hidden bg-black border-t border-white/10 z-0', className)}
			{...props}
		>
			<motion.div style={{ y, opacity }} className="relative w-full z-0 px-4 py-16 md:px-12 flex flex-col items-center">
				<div
					aria-hidden
					className="absolute inset-0 isolate z-0 overflow-hidden pointer-events-none"
				>
					<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.02)_50%,transparent_80%)] absolute top-0 left-0 h-[600px] w-[300px] -translate-y-1/4 -rotate-45 rounded-full" />
					<div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.01)_80%,transparent_100%)] absolute top-0 left-0 h-[600px] w-[150px] translate-x-[10%] -translate-y-1/2 -rotate-45 rounded-full" />
				</div>
				<div className="flex flex-col gap-12 md:flex-row xl:mt-0 relative z-10 w-full max-w-7xl mx-auto py-8">
					<AnimatedContainer className="w-full max-w-sm min-w-[280px] space-y-6 text-white">
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-2 mb-2">
								<div className="w-8 h-8 bg-blue-600 rounded-sm rotate-45 flex-shrink-0 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
									<BrainCircuit className="w-5 h-5 text-white -rotate-45" />
								</div>
								<span className="font-bold tracking-tight text-xl uppercase text-white">PHI</span>
							</div>
							<p className="text-white/60 text-sm md:text-base leading-relaxed">
								Planetary Hydrogeological Intelligence (PHI).
								<br /><br />
								AI systems for groundwater risk intelligence, environmental sensing, and geological prediction.
							</p>
						</div>
						<div className="flex gap-3 text-black pt-4">
							{socialLinks.map((link) => (
								<Button key={link.title} size="icon" variant="outline" className="size-10 border-white/20 bg-transparent text-white hover:bg-white hover:text-black rounded-full transition-all hover:scale-105">
									<link.icon className="size-5" />
								</Button>
							))}
						</div>
					</AnimatedContainer>
					
					<div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 pl-0 md:pl-12">
						{footerLinkGroups.map((group, index) => (
							<AnimatedContainer
								key={group.label}
								delay={0.1 + index * 0.1}
								className="w-full text-white"
							>
								<div className="mb-10 md:mb-0">
									<h3 className="text-xs uppercase font-extrabold text-white tracking-[0.2em] mb-6">{group.label}</h3>
									<ul className="text-white/60 space-y-4 text-sm font-medium">
										{group.links.map((link) => (
											<li key={link.title}>
												<a
													href={link.href}
													className="hover:text-white inline-flex items-center transition-colors duration-300"
												>
													{link.icon && <link.icon className="me-2 size-4" />}
													{link.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>
				<div className="text-white/40 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row relative z-10 w-full max-w-7xl mx-auto mt-12 mb-4 font-medium">
					<p>© 2026 Planetary Hydrogeological Intelligence (PHI), Inc. All rights reserved.</p>
					<p className="tracking-wide">Designed with <span className="text-white/80">Intent</span></p>
				</div>
			</motion.div>
		</footer>
	);
}

const socialLinks = [
	{ title: 'Facebook', href: '#', icon: FacebookIcon },
	{ title: 'Instagram', href: '#', icon: InstagramIcon },
	{ title: 'Youtube', href: '#', icon: YoutubeIcon },
	{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
];

const footerLinkGroups: FooterLinkGroup[] = [
	{
		label: 'Links',
		links: [
			{ title: 'Technical Documentation', href: '#' },
			{ title: 'Research', href: '#research' },
			{ title: 'Validation', href: '#validation' },
			{ title: 'Contact', href: '#contact' },
			{ title: 'Privacy Policy', href: '#' },
		],
	},
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
	children?: React.ReactNode;
	delay?: number;
};

function AnimatedContainer({
	delay = 0.1,
	children,
	...props
}: AnimatedContainerProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
