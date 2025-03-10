import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcryptjs';
import * as request from 'supertest';
import { PrismaService } from '../src/prisma/prisma.service';
import { UserModule } from '../src/users/user.module';

describe('User Authentication (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = app.get(PrismaService);
    await app.init();

    await prisma.user.create({
      data: {
        email: 'testuser@app.com',
        password: await bcrypt.hash('password123', 10),
        name: 'Test User',
        company: 'Test Company',
        role: 'USER',
        emailVerified: true,
        active: true,
      },
    });
  });

  afterAll(async () => {
    await prisma.user.deleteMany({
      where: {
        email: 'testuser@app.com',
      },
    });
    await app.close();
  });

  it('should return a valid JWT token on successful login', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/users/login')
      .send({
        email: 'testuser@app.com',
        password: 'password123',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('access_token');
    expect(response.body.user).toHaveProperty('email', 'testuser@app.com');
  });

  it('should return an error for invalid credentials', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/users/login')
      .send({
        email: 'testuser@app.com',
        password: 'wrongpassword',
      });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message', 'Credenciais inválidas');
  });
});
