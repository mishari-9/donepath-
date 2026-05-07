import { Edge } from 'reactflow';
import { SkillNode } from '@/store/useStore';

export const networkingNodes: SkillNode[] = [
  // 1. Basics
  { id: 'net-intro', type: 'skillNode', position: { x: 650, y: 50 }, data: { label: 'Computer Networking Basics', status: 'unlocked', timeEstimate: '4 hr', description: 'Connecting computers to share resources.', importance: 'The backbone of the modern internet.', prerequisites: [], resources: [{ title: 'Networking Fundamentals', url: 'https://www.youtube.com/watch?v=S7bNEAlJjEg', type: 'video' }] } },
  { id: 'net-lan', type: 'skillNode', position: { x: 100, y: 0 }, data: { label: 'LAN (Local Area Network)', status: 'locked', timeEstimate: '1 hr', description: 'Network in a small area like a home or office.', importance: 'Your home network is a LAN.', prerequisites: ['net-intro'], isSubNode: true, resources: [{ title: 'LAN vs WAN', url: 'https://www.youtube.com/watch?v=S7bNEAlJjEg', type: 'video' }] } },
  { id: 'net-wan', type: 'skillNode', position: { x: -200, y: 50 }, data: { label: 'WAN (Wide Area Network)', status: 'locked', timeEstimate: '1 hr', description: 'Network covering a large geographic area.', importance: 'The internet is a massive WAN.', prerequisites: ['net-intro'], isSubNode: true, resources: [{ title: 'WAN Technologies', url: 'https://www.youtube.com/watch?v=S7bNEAlJjEg', type: 'video' }] } },

  // 2. OSI Model
  { id: 'net-osi', type: 'skillNode', position: { x: 650, y: 250 }, data: { label: 'The OSI Model', status: 'locked', timeEstimate: '5 hr', description: '7 Layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.', importance: 'Universal troubleshooting standard.', prerequisites: ['net-intro'], resources: [{ title: 'OSI Model Explained', url: 'https://www.youtube.com/watch?v=vv4y_uOneC0', type: 'video' }] } },
  { id: 'net-l1', type: 'skillNode', position: { x: 700, y: 150 }, data: { label: 'Layer 1: Physical', status: 'locked', timeEstimate: '1 hr', description: 'Cables, fiber, radio waves. Bits.', importance: 'Is it plugged in?', prerequisites: ['net-osi'], isSubNode: true, resources: [{ title: 'Layer 1', url: 'https://www.youtube.com/watch?v=vv4y_uOneC0', type: 'video' }] } },
  { id: 'net-l2', type: 'skillNode', position: { x: 950, y: 200 }, data: { label: 'Layer 2: Data Link', status: 'locked', timeEstimate: '2 hr', description: 'MAC addresses, Switches. Frames.', importance: 'Local network delivery.', prerequisites: ['net-osi'], isSubNode: true, resources: [{ title: 'Layer 2', url: 'https://www.youtube.com/watch?v=vv4y_uOneC0', type: 'video' }] } },
  { id: 'net-l3', type: 'skillNode', position: { x: 950, y: 250 }, data: { label: 'Layer 3: Network', status: 'locked', timeEstimate: '2 hr', description: 'IP addresses, Routers. Packets.', importance: 'Routing across the internet.', prerequisites: ['net-osi'], isSubNode: true, resources: [{ title: 'Layer 3', url: 'https://www.youtube.com/watch?v=vv4y_uOneC0', type: 'video' }] } },
  { id: 'net-l4', type: 'skillNode', position: { x: 950, y: 300 }, data: { label: 'Layer 4: Transport', status: 'locked', timeEstimate: '2 hr', description: 'TCP/UDP, Ports. Segments.', importance: 'Reliable vs fast delivery.', prerequisites: ['net-osi'], isSubNode: true, resources: [{ title: 'Layer 4', url: 'https://www.youtube.com/watch?v=vv4y_uOneC0', type: 'video' }] } },
  { id: 'net-l7', type: 'skillNode', position: { x: 950, y: 350 }, data: { label: 'Layer 7: Application', status: 'locked', timeEstimate: '1 hr', description: 'HTTP, FTP, DNS. Data.', importance: 'What the user sees.', prerequisites: ['net-osi'], isSubNode: true, resources: [{ title: 'Layer 7', url: 'https://www.youtube.com/watch?v=vv4y_uOneC0', type: 'video' }] } },

  // 3. IP Addressing
  { id: 'net-ip', type: 'skillNode', position: { x: 650, y: 500 }, data: { label: 'IP Addressing & Subnetting', status: 'locked', timeEstimate: '8 hr', description: 'IPv4, IPv6, CIDR notation.', importance: 'Designing networks without overlapping IPs.', prerequisites: ['net-osi'], resources: [{ title: 'Subnetting Mastery', url: 'https://www.youtube.com/watch?v=bwZPiHQvLCA', type: 'video' }] } },
  { id: 'net-priv', type: 'skillNode', position: { x: 100, y: 400 }, data: { label: 'Public vs Private IPs', status: 'locked', timeEstimate: '1 hr', description: 'RFC 1918 (10.x.x.x, 192.168.x.x).', importance: 'NAT allows home devices onto the public internet.', prerequisites: ['net-ip'], isSubNode: true, resources: [{ title: 'Public vs Private', url: 'https://www.youtube.com/watch?v=bwZPiHQvLCA', type: 'video' }] } },
  { id: 'net-cidr', type: 'skillNode', position: { x: -200, y: 450 }, data: { label: 'CIDR Notation (/24)', status: 'locked', timeEstimate: '2 hr', description: 'Classless Inter-Domain Routing.', importance: 'Modern subnetting shorthand.', prerequisites: ['net-ip'], isSubNode: true, resources: [{ title: 'CIDR', url: 'https://www.youtube.com/watch?v=bwZPiHQvLCA', type: 'video' }] } },
  { id: 'net-gw', type: 'skillNode', position: { x: -200, y: 500 }, data: { label: 'Default Gateway', status: 'locked', timeEstimate: '1 hr', description: 'The IP of your router.', importance: 'Where traffic goes if it leaves the LAN.', prerequisites: ['net-ip'], isSubNode: true, resources: [{ title: 'Default Gateway', url: 'https://www.youtube.com/watch?v=bwZPiHQvLCA', type: 'video' }] } },

  // 4. Protocols
  { id: 'net-proto', type: 'skillNode', position: { x: 650, y: 700 }, data: { label: 'Network Protocols', status: 'locked', timeEstimate: '5 hr', description: 'Rules of communication.', importance: 'Allows different systems to talk.', prerequisites: ['net-ip'], resources: [{ title: 'Protocols', url: 'https://www.youtube.com/watch?v=EKvjgOkHBa8', type: 'video' }] } },
  { id: 'net-tcp', type: 'skillNode', position: { x: 700, y: 650 }, data: { label: 'TCP vs UDP', status: 'locked', timeEstimate: '1 hr', description: 'Connection-oriented vs Connectionless.', importance: 'Web browsing vs Video streaming.', prerequisites: ['net-proto'], isSubNode: true, resources: [{ title: 'TCP vs UDP', url: 'https://www.youtube.com/watch?v=EKvjgOkHBa8', type: 'video' }] } },
  { id: 'net-dns', type: 'skillNode', position: { x: 950, y: 700 }, data: { label: 'DNS', status: 'locked', timeEstimate: '2 hr', description: 'Domain Name System.', importance: 'Translates google.com to an IP.', prerequisites: ['net-proto'], isSubNode: true, resources: [{ title: 'How DNS Works', url: 'https://www.youtube.com/watch?v=mpQZVYPuDGU', type: 'video' }] } },
  { id: 'net-dhcp', type: 'skillNode', position: { x: 950, y: 750 }, data: { label: 'DHCP', status: 'locked', timeEstimate: '1 hr', description: 'Dynamic Host Configuration Protocol.', importance: 'Automatically assigns IPs.', prerequisites: ['net-proto'], isSubNode: true, resources: [{ title: 'DHCP', url: 'https://www.youtube.com/watch?v=EKvjgOkHBa8', type: 'video' }] } },
];

export const networkingEdges: Edge[] = [
  { id: 'e-intro-lan', source: 'net-intro', target: 'net-lan', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-wan', source: 'net-intro', target: 'net-wan', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },
  
  { id: 'e-intro-osi', source: 'net-intro', target: 'net-osi', type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e-osi-l1', source: 'net-osi', target: 'net-l1', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-osi-l2', source: 'net-osi', target: 'net-l2', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-osi-l3', source: 'net-osi', target: 'net-l3', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-osi-l4', source: 'net-osi', target: 'net-l4', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-osi-l7', source: 'net-osi', target: 'net-l7', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },

  { id: 'e-osi-ip', source: 'net-osi', target: 'net-ip', type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e-ip-priv', source: 'net-ip', target: 'net-priv', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-ip-cidr', source: 'net-ip', target: 'net-cidr', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-ip-gw', source: 'net-ip', target: 'net-gw', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },

  { id: 'e-ip-proto', source: 'net-ip', target: 'net-proto', type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e-proto-tcp', source: 'net-proto', target: 'net-tcp', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-proto-dns', source: 'net-proto', target: 'net-dns', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-proto-dhcp', source: 'net-proto', target: 'net-dhcp', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '5,5' } },
];
