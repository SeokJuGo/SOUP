package io.ssafy.soupapi.domain.project.postgresql.application;


import io.ssafy.soupapi.domain.member.entity.Member;
import io.ssafy.soupapi.domain.project.mongodb.dto.request.UpdateProjectInfo;
import io.ssafy.soupapi.domain.project.postgresql.dao.PProjectRepository;
import io.ssafy.soupapi.domain.project.postgresql.dto.response.SimpleProjectDto;
import io.ssafy.soupapi.domain.project.postgresql.entity.Project;
import io.ssafy.soupapi.domain.project.postgresql.entity.ProjectRole;
import io.ssafy.soupapi.domain.projectauth.entity.ProjectAuth;
import io.ssafy.soupapi.global.common.code.ErrorCode;
import io.ssafy.soupapi.global.common.request.PageOffsetRequest;
import io.ssafy.soupapi.global.common.response.OffsetPagination;
import io.ssafy.soupapi.global.common.response.PageOffsetResponse;
import io.ssafy.soupapi.global.exception.BaseExceptionHandler;
import io.ssafy.soupapi.global.security.user.UserSecurityDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Log4j2
@Service
@RequiredArgsConstructor
public class PProjectServiceImpl implements PProjectService {
    private final PProjectRepository pProjectRepository;

    /**
     * mongodb에서 생성된 프로젝트를 postgresql project 객체로 연관 등록
     * project auth 등록
     *
     * @param projectId       new mongodb project's project id
     * @param userSecurityDTO new project maker
     */
    @Override
    public void registProject(String projectId, UserSecurityDTO userSecurityDTO) {
        // 프로젝트 등록
        var project = Project.builder()
                .id(projectId)
                .build();
        // 프로젝트 최초 권한 등록
        project.addProjectAuth(ProjectAuth.builder()
                .roles(Set.of(ProjectRole.ADMIN))
                .member(Member.builder().id(userSecurityDTO.getId()).build())
                .project(project)
                .build());
        pProjectRepository.save(project);
    }

    @Transactional(readOnly = true)
    @Override
    public PageOffsetResponse<List<SimpleProjectDto>> findSimpleProjects(PageOffsetRequest pageOffset, UserSecurityDTO userSecurityDTO) {
        var data = pProjectRepository.findSimpleProjectsByMemberId(
                userSecurityDTO.getId(), PageOffsetRequest.of(pageOffset, Sort.by(Sort.Direction.DESC, "modifiedAt"))
        );
        return PageOffsetResponse.<List<SimpleProjectDto>>builder()
                .content(data.getContent())
                .pagination(OffsetPagination.offset(data.getTotalPages(), data.getTotalElements(), data.getPageable()))
                .build();
    }

    @Transactional
    @Override
    public void updateProjectInfo(String projectId, UpdateProjectInfo updateProjectInfo) {
        var project = pProjectRepository.findById(projectId).orElseThrow(() ->
                new BaseExceptionHandler(ErrorCode.NOT_FOUND_PROJECT));
        project.setName(updateProjectInfo.name());
        pProjectRepository.save(project);
    }

    @Transactional(readOnly = true)
    public Project findById(String projectId) {
        return pProjectRepository.findById(projectId).orElseThrow(() ->
                new BaseExceptionHandler(ErrorCode.NOT_FOUND_PROJECT));
    }
}