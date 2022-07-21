import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EmpresaResolverBase } from "./base/empresa.resolver.base";
import { Empresa } from "./base/Empresa";
import { EmpresaService } from "./empresa.service";

@graphql.Resolver(() => Empresa)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmpresaResolver extends EmpresaResolverBase {
  constructor(
    protected readonly service: EmpresaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
