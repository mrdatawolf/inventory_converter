import { User, Color, Vendor} from '@prisma/client'
import NextCrud, { PrismaAdapter } from '@premieroctet/next-crud'
import { prisma } from '../../db'

const handler = NextCrud({
    adapter: new PrismaAdapter<User | Color, Vendor>({
      prismaClient: prisma,
    }),
    swagger: {
      title: 'My API CRUD',
      apiUrl: process.env.API_URL as string,
      config: {
        Color: {
          tag: {
            name: 'Colors',
          },
        },
        Vendor: {
          tag: {
            name: 'Vendors',
          },
        },
      },
    },
  })
  
  export default handler