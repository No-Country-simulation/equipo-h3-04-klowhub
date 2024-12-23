const columns = [
  { name: 'Nombre del cliente', uid: 'name' },
  { name: 'Monto', uid: 'monto' },
  { name: 'Tipo', uid: 'tipo' },
  { name: 'Estado', uid: 'status' },
  { name: 'Plataforma', uid: 'plataforma' },
];

export interface Cliente {
  id: number;
  name: string;
  tipo: 'curso' | 'leccion' | 'aplicación' | 'proyecto' | 'mentoria';
  status: string;
  plataforma: string;
  avatar: string;
  monto: number;
}

const clientes: Cliente[] = [
  {
    id: 1,
    monto: 650,
    name: 'Tony Reichert',
    tipo: 'curso',
    status: 'active',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    plataforma: '',
  },
  {
    id: 2,
    name: 'Zoey Lang',
    status: 'paused',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    plataforma: '',
    tipo: 'aplicación',
    monto: 650,
  },
  {
    id: 3,
    name: 'Jane Fisher',
    status: 'active',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    plataforma: '',
    tipo: 'leccion',
    monto: 650,
  },
  {
    id: 4,
    name: 'William Howard',
    status: 'vacation',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    plataforma: '',
    tipo: 'mentoria',
    monto: 650,
  },
  {
    id: 5,
    name: 'Kristen Copper',
    status: 'active',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    plataforma: '',
    tipo: 'proyecto',
    monto: 650,
  },
];

export { columns, clientes as users };
