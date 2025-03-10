import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      email: 'admin@admin.com',
      password: await bcrypt.hash('123456', 10),
      name: 'Administrador',
      company: 'Admin Corp',
      role: 'ADMIN',
      timer: JSON.stringify({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        lastUpdated: Date.now(),
      }),
    },
    {
      email: 'user1@app.com',
      password: await bcrypt.hash('password1', 10),
      name: 'Usuário 1',
      company: 'Company 1',
      role: 'USER',
      timer: JSON.stringify({
        days: 2,
        hours: 4,
        minutes: 30,
        seconds: 15,
        lastUpdated: Date.now(),
      }),
    },
    {
      email: 'user2@app.com',
      password: await bcrypt.hash('password2', 10),
      name: 'Usuário 2',
      company: 'Company 2',
      role: 'USER',
      timer: JSON.stringify({
        days: 5,
        hours: 12,
        minutes: 0,
        seconds: 45,
        lastUpdated: Date.now(),
      }),
    },
    {
      email: 'diego@mindclear.com',
      password: await bcrypt.hash('password2', 10),
      name: 'Diego Lima de Oliveira',
      company: 'Oasis Global Payments',
      role: 'USER',
      timer: JSON.stringify({
        days: 1,
        hours: 8,
        minutes: 15,
        seconds: 30,
        lastUpdated: Date.now(),
      }),
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: user,
      create: user,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
