import { Injectable } from '@nestjs/common';
import { CreateP002Dto } from './dto/create-p002.dto';
import { UpdateP002Dto } from './dto/update-p002.dto';

@Injectable()
export class P002Service {
  create(createP002Dto: CreateP002Dto) {
    return 'This action adds a new p002';
  }

  findAll() {
    return `This action returns all p002`;
  }

  findOne(id: number) {
    return `This action returns a #${id} p002`;
  }

  update(id: number, updateP002Dto: UpdateP002Dto) {
    return `This action updates a #${id} p002`;
  }

  remove(id: number) {
    return `This action removes a #${id} p002`;
  }
}
